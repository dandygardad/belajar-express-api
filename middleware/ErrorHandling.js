// ERRRRRRRORR HANDLEENGG

// Handling 404
function error404 (req, res) {
    res.status(404).json({
        error: 404,
        message: "Apa maksud requestmu ini?"
    })
}

// Handling 500
function error500 (error, req, res, next) {
    res.status(500).json({
        error: 500,
        message: "Bukanji salahmu, ini semua salahnya server :("
    })
}

module.exports = {
    error404, error500
}