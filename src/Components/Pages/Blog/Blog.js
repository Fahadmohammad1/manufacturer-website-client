import React from "react";

const Blog = () => {
  return (
    <div>
      <article class="py-12 px-4">
        <h1 class="text-5xl text-center mb-6 font-heading font-semibold">
          Some Question About Javascript and React
        </h1>
        <div class="max-w-3xl mx-auto">
          <h3 className="text-2xl my-3 text-primary">
            How will you improve the performance of a React Application?
          </h3>
          <p class="mb-4">
            React application already gives us a fast UI. But there is some ways
            to optimize a react application.
          </p>

          <ul class="mb-4 list-inside list-disc">
            <li>Using "async - await" function</li>
            <li>use Components state local</li>
            <li>Dynamically split the code</li>
            <li>No code repeatation</li>
            <li>Always prevent unnecessary re-renders</li>
          </ul>
          <div>
            <h3 className="text-2xl my-3 text-primary">
              What are the different ways to manage a state in a React
              application?
            </h3>
            <p className="mb-4">
              There are 4 types of state we need to manage properly in a react
              application.
            </p>
            <ul class="mb-4 list-inside list-disc">
              <li>
                <strong>Global State</strong> - which is used in multiple
                components
              </li>
              <li>
                <strong>Local State</strong> - the state we used in one or
                another components
              </li>
              <li>
                <strong>Server State</strong> - The state that we used to store
                data that comes from another server{" "}
              </li>
              <li>
                <strong>URL State</strong> - The state that store data which is
                exist on brower URL
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl my-3 text-primary">
              How does prototypical inheritance work?
            </h3>
            <p className="mb-4">
              Javascript is a prototype-based, Object Oriented programming
              language. Prototypical Inheritence means We can share data one
              object ot another object, one array to another array , copying
              data from one array/object to another array/object. also can put
              the data one object/array to another object/array. Prototypcial
              inheritance is a powerful thing in javascript. Its saves our time
            </p>
          </div>
          <div>
            <h3 className="text-2xl my-3 text-primary">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h3>
            <p className="mb-4">
              In state we are not setting the value immediately. It creates a
              pending state transiton, and accessing it after calling this
              method will only return the present value. We set the value when
              we call that set function in anywhere. So the value is depending
              on that set function.
            </p>
          </div>
          <div>
            <h3 className="text-2xl my-3 text-primary">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h3>
            <p className="mb-4">
              1st i will use find for get the each product in the array. And
              sets a condition if the name is equal to the given name.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
