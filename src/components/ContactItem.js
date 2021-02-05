const ContactItem = ({firstName, lastName, phoneNumber, profileImage}) => {
    return (
        <div className="ContactItem">
            <img src={profileImage}/>
            <div>
                <p>{`${firstName} ${lastName}`}</p>
                <p>{phoneNumber}</p>
            </div>
            <button>X</button>
        </div>
    )
}

export default ContactItem;