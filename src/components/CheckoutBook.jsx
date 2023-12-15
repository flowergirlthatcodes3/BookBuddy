import { useNavigate, useParams } from "react-router-dom"


const CheckoutBook = ({books}) => {
const params = useParams()
const id = params.id*1

const navigate = useNavigate()

const thisBook = books.find((book) => {
    return book.id === id
})


}
export default CheckoutBook