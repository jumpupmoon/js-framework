import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {Button} from 'antd';

function Favorite(props) {
    const movieId = props.movieId;
    const userFrom = props.userFrom;
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
    const movieRunTime = props.movieInfo.runtime;

    const [FavoriteNumber, setFavoriteNumber] = useState(0);
    const [Favorited, setFavorited] = useState(false);
    
    let variables = {
        userFrom,
        movieId,
        movieTitle,
        moviePost,
        movieRunTime
    }

    useEffect(() => {

        // 좋아요 개수 확인
        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                if(response.data.success) {
                    setFavoriteNumber(response.data.favoriteNumber)
                } else {
                    alert('숫자 정보를 가져오는데 실패');
                }
            })
        
        // 좋아요 확인
        Axios.post('/api/favorite/favorited', variables)
        .then(response => {
            if(response.data.success) {
                setFavorited(response.data.favorited);
            } else {
                alert('숫자 정보를 가져오는데 실패');
            }
        })
    }, [])

    const onClickFavorite = () => {
        if(Favorited) { // 좋아요 취소
            Axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                    if(response.data.success) {
                        setFavoriteNumber(FavoriteNumber-1);
                        setFavorited(!Favorited);
                    } else {
                        alert('좋아요 취소 실패')
                    }
                })
        } else { // 좋아요 처리
            Axios.post('/api/favorite/addToFavorite', variables)
                .then(response => {
                    if(response.data.success) {
                        setFavoriteNumber(FavoriteNumber+1);
                        setFavorited(!Favorited);
                    } else {
                        alert('좋아요 실패')
                    }
                })
        }
    }

    return (
        <div>
            <Button onClick={onClickFavorite}>
                {Favorited? "Not Favorite" : "Add to Favorite"} {FavoriteNumber}
            </Button>
        </div>
    )
}

export default Favorite
