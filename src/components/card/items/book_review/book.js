import React from 'react'
import './book.css'

function Book(props) {

    const firstLetterSlasher = (str) => {
        return str ? str.substring(1) : null;
    }

    const firstLetterToCapital = (str) => {
        return str ? str.charAt(0) : null;
    }

    const style = {
        backgroundColor: props.book.coverColor
    }

    const displayContent = () => (
        <div>
        <div className="decoration"></div>
                    <div className="b-dec">
                        <div className='cover' style={style}>{props.book.title}</div>
                        <span className="card-title">{props.book ? props.book.title : null}</span><br />
                        <span className="author">by {props.book ? props.book.author : null}</span>
                        <div className="card-content">
                            <div className="text-and-capitalic">
                                <div className="capitalic">{props.book ? firstLetterToCapital(props.book.impression) : null}</div>
                                <p className="card-text">{props.book ? firstLetterSlasher(props.book.impression) : null}</p>
                            </div><br/>
                            <div className="aux-notes">{props.book ? props.book.quotation : null}</div>
                        </div>
                        <span>Readed by {props.book.user} on {props.book.readed}</span> 
                    </div>
                <div className="decoration"></div>
        </div>
        
    )
    return (
        <div className='book-main'>
            {props.book.title ? displayContent() : <div>Loading</div>}
        </div>
    )
}

export default Book
