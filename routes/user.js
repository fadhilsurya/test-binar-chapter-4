const router = require('express').Router()
const user = require('../controller/user')
const { body, validationResult } = require('express-validator')

// in this file we separate router to from the main /user address to smaller one such as
// /dashboard /register /signin /signup /etc
const userClass = new user()

// bagian ini me-render bagian page menggunakan EJS 
router.get('/', (req, res, next) => {
    res.render('dashboard')
})

router.get('/signin', (req, res, next) => {
    res.render('signin')
})

router.get('/signup', (req, res, next) => {
    res.render('signup')
})

// menghubungkan ke controller
router.post('/signup',
    body('password').isLength({ min: 5 }),
    body('password').isString(),
    body('email').isEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        userClass.postsighup(req.body.email, req.body.password)

        return res.status(200).json({
            data: 'successfully inserted'
        })
    })

module.exports = router