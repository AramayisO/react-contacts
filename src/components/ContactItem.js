const ContactItem = ({firstName, lastName, phoneNumber, profileImage, deleteContact}) => {
    return (
        <div className="ContactItem">
            <img src={profileImage}/>
            <div>
                <p>{`${firstName} ${lastName}`}</p>
                <p>{phoneNumber}</p>
            </div>
            <button onClick={deleteContact}>X</button>
        </div>
    )
}

export default ContactItem;