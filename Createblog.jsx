import React, { useState, useEffect } from 'react'

export const Createblog = () => {
    const [text, setText] = useState({
        title: "",
        imageUrl: "",
        Description: ""

    })
    const [err, setErr] = useState({
        title: "",
        imageUrl: "",
        Description: ""
    })
    const onText = (ele) => {
        //console.log("submitted")
        const { value, name } = ele.target
        setText((ele) => ({ ...ele, [name]: value }))

    }
    console.log(text)
    const onSubmit1 = (ele) => {
        if (ele.title == "") {
            setErr((ele) => ({
                title: "required title*"
            }))
        }
        if (ele.title && !(ele.title.length > 2 && ele.title.length < 11)) {
            setErr(() => ({
                title: "length should be between 3 and 10*"
            }))
        }
        if (!ele.imageUrl=="") {
            setErr(() => ({
                imageUrl: "required imageUrl*"
            }))

        }
        if (ele.Description == "") {
            setErr(() => ({
                Description: "required Description*"
            }))
        }
        if (ele.Description && !(ele.Description.length > 2 && ele.Description.length < 11)) {
            setErr(() => ({
                Description: "length should be between 3 and 10*"
            }))
        }
        else {
            setErr(() => ({
                title: "",
                imageUrl: "",
                Description: ""
            }))
        }
    }


    return (
        <div className="card" style={{ width: "24rem", marginLeft: "35%", padding: "50px" }}>
            <div className="card-header">
                <p>Blog</p>
            </div>
            <div className="card-body from">
                <input type="text" name='title' id="form12" class="form-control" onChange={onText} />
                <label class="form-label" for="form12">Title</label>
                <p style={{ color: "red" }}>{err.title}</p>
                <input type="text" name='imageUrl' id="form12" class="form-control" onChange={onText} />
                <label class="form-label" for="form12">ImageUrl</label>
                <p style={{ color: "red" }}>{err.imageUrl}</p>
                <textarea class="form-control" name='Description' id="textAreaExample1" rows="4" onChange={onText}></textarea>
                <label class="form-label" for="textAreaExample">Description</label>
                <p style={{ color: "red" }}>{err.Description}</p>
            </div>
            <div className="card-footer">
                <button className='btn btn-primary' onClick={() => { onSubmit1(text) }}>Create Blog</button>
            </div>
        </div>
    )
}
