import React from "react"

function Input() {
    return (
        <div className="field-input-error">
            <input type="text" placeholder="email" {...register("email", { required: true, pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i })} />
            {errors?.email?.type === "required" || errors?.email?.type === "pattern" ?
                <p className="input-error">insira um email válido</p> : null}
        </div>
    )
}

export default Input