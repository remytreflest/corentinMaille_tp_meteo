const Resultats = ({ title, experience, date }) => {
    return (
        <div className='card text-center m-3'>
            <div className='card-header card-header-subsection'>{title}</div>
            <div className='card-body'>
                <p className='card-text'>{experience}</p>
            </div>
            <div className='card-footer text-muted'>{date}</div>
        </div>
    )
}

export default Resultats