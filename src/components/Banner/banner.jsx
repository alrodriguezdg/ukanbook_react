import React from 'react'

function Banner({ Titulo, Narticulo }) {
    return (
        <div className={`inside-banner ${Titulo} container-fluid`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 align-self-center">
                        <h2>
                            {Narticulo ? Narticulo.toUpperCase() : Titulo.toUpperCase()}
                            <small className="breadcrumb"> <a href="#">Home</a> -{Narticulo ? Narticulo : Titulo}</small>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
