
const initialState = {
    formValues: {},
    message: ""
};

const addDish = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FORMVALUES":
            return {
                ...state,
                formValues: action.payload
            };
        case "SUBMIT_FORM":
            console.log("--- Triggered Form submission ---");
            console.log("Form Data - ", state.formValues);
            var dishList = [];
            let dsListLocal = localStorage.getItem("dishList");
            console.log("ds List Local - ", dsListLocal);
            if (localStorage.getItem("dishList") !== null) {
                dishList = JSON.parse(localStorage.getItem("dishList"));
            }
            dishList.push(state.formValues);
            localStorage.setItem("dishList", JSON.stringify(dishList));
            return {
                ...state,
                message: "Form submitted!!"
            };
        default:
            return state;
    }
};

export default addDish;