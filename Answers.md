# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
    React JS is a library created by Facebook that let's devlopers create UI out of reusable components. These components are updated using the virtual DOM, where data can be rendered in one component, but the other components may or may not be re-rendered, depending on if they have changes as well.

1. Describe component state.
    Component state is data that our app keeps track of. The app uses state to determine if an update to any of our components is needed. If there is a change, the component is changed based on our new state.

1. Describe props.
    Props is data that are properties that are passed down from parent components to child components. Child components consume the props of their parent elements to render a component based off of that data.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
    A side effect in React is anything that affects something else that is outside of the scope of the function when it is executed. For example, an API call can be a separate function inside our React app, but the data that is pulled from the API will be used to change our component state, which is a side effect of the original API call. You use a dependency array with your slice of state in it. That effect will only trigger when that slice of state is changed.
