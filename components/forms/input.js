//greatsaigon/components/FormComponents/input.js

const Input = (props)  => {

    const { type, placeholder, name, value, classes, onChangeFunc, options} = props

    return (
        <input autoComplete="off" className={classes} type={ type } placeholder={ placeholder } value={ value } name={name} 
                    onChange={ event => { onChangeFunc(event, options)  }} />
    )
}
export default Input;