const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const {auth} = require('./middleware/auth');
const {User} = require('./models/user');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err));

app.get('/api/hello', (req, res) => res.send('hello wolrd!'));

// 가입
app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err});
        return res.status(200).json({success:true});
    });
})

// 로그인
app.post('/api/users/login', (req, res) => {
    // 이메일 주소 확인
    User.findOne({email: req.body.email}, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "유저가 없음"
            })
        }
        
        // 비밀번호 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) {
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호 틀림"
                })
            }
            
            // 토큰 생성
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
                
                res.cookie('x_auth', user.token)
                .status(200)
                .json({
                    loginSuccess: true,
                    userId: user._id
                })
                
            })
        })
    })
})

// 인증
app.get('/api/users/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.role
    })
})

// 로그아웃
app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        {_id: req.user._id},
        {token: ''},
        (err, user) => {
            if(err) return res.json({success: false, err});
            return res.status(200).send({success: true});
        }
    )
})

app.listen(port, () => console.log(`서버 시작! ${port}`));