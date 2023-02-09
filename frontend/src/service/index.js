import axios from "axios";

function getPosts() {
    return new Promise(resolve => {
        axios.get("")
        .then(console.log)
        .catch(console.error)
    })
}