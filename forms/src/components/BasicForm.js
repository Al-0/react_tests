import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim().length > 0;

const BasicForm = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput(isNotEmpty);
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(
    isNotEmpty && (value => value.toLowerCase().match(emailRegex))
  );

  let formIsValid = false;

  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log({ nameValue, lastNameValue, emailValue });

    nameReset();
    lastNameReset();
    emailReset();
  };

  const nameStyle = !nameHasError ? "form-control" : "form-control invalid";
  const lastNameStyle = !lastNameHasError
    ? "form-control"
    : "form-control invalid";
  const emailStyle = !emailHasError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameStyle}>
          <label htmlFor="name">First Name</label>
          <input
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            id="name"
          />
          {nameHasError && <p className="error-text">Enter a name</p>}
        </div>
        <div className={lastNameStyle}>
          <label htmlFor="lastName">Last Name</label>
          <input
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            id="lastName"
          />
          {lastNameHasError && <p className="error-text">Enter a last name</p>}
        </div>
      </div>
      <div className={emailStyle}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="email"
        />
        {emailHasError && <p className="error-text">Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
