import "./../assets/css/loading.css"

function Loading() {
    return (
        <>

            <div className={`lds-ellipsis`} >
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </>
    )
}

export default Loading