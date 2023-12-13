import {Response, Router} from "express";
import {SendRequest} from "../lib/ChatGpt";
import {ChatCompletionMessageParam} from "openai/src/resources/chat/completions";
import {RequestWithUser, verifyToken} from "../middlewares/authMiddleware";
import {readFileSync} from "fs";
import db from "../lib/Database";

const router = Router()

export type Infos = {
    id: number,
    first_name: string,
    email: string,
    role: string,
}

let history: {
    [key: number]: {
        history: Array<ChatCompletionMessageParam>,
        infos: Infos
    },
} = {}

router.get("/", verifyToken, async (req: RequestWithUser, res: Response) => {
    if (!await InitUser(req.user.id)) return res.status(400).json({message: "Bad request"})
    res.json({
        history: history[req.user.id].history.slice(1),
    })
})

// @ts-ignore
router.post("/", verifyToken, async (req: RequestWithUser, res: Response) => {
    const msg = req.body.message
    if (!msg || typeof msg !== "string") return res.status(400).json({message: "Bad request"})
    if (!await InitUser(req.user.id)) return res.status(400).json({message: "Bad request"})
    // @ts-ignore
    history[req.user.id].history = await SendRequest(history[req.user.id].history, removeTags(msg), history[req.user.id].infos)
    res.json({
        answer: history[req.user.id].history[history[req.user.id].history.length - 1].content,
    })
})

async function InitUser(id: number): Promise<boolean> {
    try {

        if (!history[id]) {
            const res = await db.query("SELECT * FROM utilisateur WHERE idutilisateur = $1", [id])
            if (res.rows.length === 0) return false
            const role = await db.query("SELECT * FROM getrole($1)", [id])
            const infos = {
                id,
                first_name: res.rows[0].nom,
                email: res.rows[0].email,
                role: role.rows[0].getrole,
            }
            const prompt = readFileSync("./lib/prompt.txt", "utf-8") + `La personne s'appelle ${infos.first_name} et son email est ${infos.email}.Il est ${infos.role}.`;
            history[id] = {
                history: [{content: prompt, role: "system"}],
                infos
            }
        }
        return true
    } catch (e) {
        console.error(e)
        return false
    }
}

function removeTags(str: string) {
    if ((str === null) || (str === ''))
        return false;
    str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
}

export default router