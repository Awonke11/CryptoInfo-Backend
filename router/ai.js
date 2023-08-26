const express = require("express");
const {spawn} = require("child_process")

const runPythonScript = (path) => {
    const pythonProgram = spawn("python", [path])

    let data = []
    pythonProgram.stdout.on('data', (stdout) => {
        data.push(stdout.toString());
    })

    pythonProgram.stdout.on('data', (stderr) => {
        throw new Error(`Output error: ${stderr}`)
    })

    pythonProgram.on('close', (code) => {
        console.log(`Child process exited with code: ${code}`)
    })

    return data
}

const router = express.Router();

router.get("/v1/reviewer", (req, res) => {
    try {
        const data = runPythonScript("../models/tokenReviewer.py")
        res.status(200).json({output: data})
    } catch(err) {
        res.status(400).json({error: err})
    }
})

router.get("/v1/converter", (req, res) => {
    try {
        const data = runPythonScript("../models/tokenConvertor.py")
        res.status(200).json({output: data})
    } catch(err) {
        res.status(400).json({error: err})
    }
})

module.exports = router;