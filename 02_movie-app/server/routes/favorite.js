const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

// 좋아요 개수 확인
router.post('/favoriteNumber', (req, res) => {
    Favorite.find({"movieId": req.body.movieId})
        .exec((err, info) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({success: true, favoriteNumber: info.length});
        })
})

// 좋아요 했는지 확인
router.post('/favorited', (req, res) => {
    Favorite.find({"movieId": req.body.movieId, "userFrom": req.body.userFrom})
        .exec((err, info) => {
            if(err) return res.status(400).send(err);

            let result = false;
            if(info.length !== 0) {
                result = true;
            }
            res.status(200).json({success: true, favorited: result});
        })
})

// 좋아요 취소
router.post('/removeFromFavorite', (req, res) => {
    Favorite.findOneAndDelete({movieId: req.body.movieId, userFrom: req.body.userFrom})
        .exec((err, doc) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({success: true});
        })
})

// 좋아요 처리
router.post('/addToFavorite', (req, res) => {
    const favorite = new Favorite(req.body);
    favorite.save((err, doc) => {
        if(err) return res.status(400).send(err);
        return res.status(200).json({success: true});
    })
})

// 좋아요 한 영화 목록
router.post('/getFavoriteMovie', (req, res) => {
    Favorite.find({'userFrom': req.body.userFrom})
        .exec((err, favorites) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({success: true, favorites});
        })
})


module.exports = router;
