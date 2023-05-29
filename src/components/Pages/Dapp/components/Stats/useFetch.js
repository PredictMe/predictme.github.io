import React,{useState, useEffect} from 'react'
import {SERVER_URL} from '../../../../../settings'

function useFetch(options) {
    let [data, setData] = useState({total_predictions: 0,correct_predictions: 0,incorrect_prediction:0, percentige : 0})
    useEffect(() => {
        console.log(options)
        console.log("useFetch USEFETCH")
        fetch(SERVER_URL+'stats',{
            method : 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({
                dappAddress: options.dappAddress,
              }),
        }).then((res) => res.json())
        .then((res) => {
          let theoretical_value = parseInt(res.correct_predictions)+parseInt(res.incorrect_prediction)
          let negative_percentige = (parseInt(res.correct_predictions) - theoretical_value)/ theoretical_value
          let percentige = (1+negative_percentige)*100
          res.percentige = percentige
          setData(res)
        })
    }, [options])

  return ({
    data
  })
}

export default useFetch