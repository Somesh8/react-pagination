/* This example requires Tailwind CSS v3.0+ */
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import authService from '../services/auth.service';

const toastObj = {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}

export default function Registration() {
    let firstnameInput = React.createRef();
    let lastnameInput = React.createRef();
    let emailInput = React.createRef();
    let ageInput = React.createRef();
    let passwordInput = React.createRef();
    let confirmPasswordInput = React.createRef();

    function handleRegister(e) {
        e.preventDefault();
        console.log("Click");
        let state = {
            fullname: firstnameInput.current.value.trim() + " " + lastnameInput.current.value.trim(),
            email: emailInput.current.value.trim(),
            age: ageInput.current.value,
            password: passwordInput.current.value.trim(),
            confirmPassword: confirmPasswordInput.current.value.trim()
        }
        // validations
        if(state.password !== state.confirmPassword) {
            toast.error("Password Not Matching", toastObj);
            return;
        }
        //  API calling
        authService.register(state).then(
            (response) => {
                //   this.props.router.navigate("/profile");
                console.log("Data", response.data);
                toast.success("User Sucess", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // window.location.reload();
            },
            error => {
                const resMessage = " Failed ";
                toast.error(resMessage, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        );

    }
    return (

        <div className="flex min-h-full h-screen w-screen w-screen px-4 lg:px-0">

            {/*  CARD USING TAILWIND CSS
             <div className="relative bg-white w-full p-4 shadow-md lg:max-w-lg">
                <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">
                        React Tailwind Card Title
                    </h3>
                    <p className="text-gray-600">
                        react with tailwind css simple card It is a long established
                        fact that a reader will be distracted.
                    </p>
                </div>
            </div> */}

            <div class="w-screen grid grid-cols-3">
                {/* Col 1 */}
                <div class="col-span-2">
                    <div className="mt-32 sm:mt-0 relative bg-white">
                        <div className="md:grid md:grid-cols-3 md:gap-6">
                            <div className="mt-5 md:col-span-3 md:mt-0">
                                <div>
                                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                        Register
                                    </h2>
                                </div>
                                <form action="#" method="POST">
                                    <div className="overflow-hidden shadow sm:rounded-md">
                                        <div className="bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                        First name
                                                    </label>
                                                    <input
                                                        ref={firstnameInput}
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-md"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Last name
                                                    </label>
                                                    <input
                                                        ref={lastnameInput}
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-4">
                                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                        Email address
                                                    </label>
                                                    <input
                                                        ref={emailInput}
                                                        type="email"
                                                        name="email-address"
                                                        id="email-address"
                                                        autoComplete="email"
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-2">
                                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                        Age
                                                    </label>
                                                    <select
                                                        ref={ageInput}
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    >
                                                        <option value={20}> 20</option>
                                                        <option value={21}> 21</option>
                                                        <option value={22}> 22</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-6 sm:col-span-4">
                                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                        Password
                                                    </label>
                                                    <input
                                                        ref={passwordInput}
                                                        type="password"
                                                        name="email-address"
                                                        id="email-address"
                                                        autoComplete="email"
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-6 sm:col-span-4">
                                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                        Confirm Password
                                                    </label>
                                                    <input
                                                        ref={confirmPasswordInput}
                                                        type="password"
                                                        name="email-address"
                                                        id="email-address"
                                                        autoComplete="email"
                                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button
                                                onClick={handleRegister}
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex min-h-full items-center justify-center px-4">
                        <div className="relative bg-white w-full p-4 shadow-md max-w-full space-y-8">
                            <div>
                                <img
                                    className="mx-auto h-12 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt="Your Company"
                                />
                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                    Register your account
                                </h2>
                            </div>
                            <form className="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="-space-y-px rounded-md shadow-sm">
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            // ref={usernameInput}
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            // ref={usernameInput}
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            // ref={usernameInput}
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            // ref={usernameInput}
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            // ref={usernameInput}
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            // ref={usernameInput}
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            // ref={passwordInput}
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        // onClick={ handleLogin }
                                        type="submit"
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        </span>
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        </div>
                        <br />
                    </div> */}
                </div>
                {/* Col 2 */}
                <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 relative bg-white w-full p-4 shadow-md lg:max-w-lg">
                    {/* <div className=" space-y-2">
                        <h3 className="text-2xl font-semibold">
                            React Tailwind Card Title
                        </h3>
                        <p className="text-gray-600">
                            react with tailwind css simple card It is a long established
                            fact that a reader will be distracted.
                        </p>
                    </div> */}
                </div>
                {/* <div class="...">05</div> */}
            </div>



        </div>
    )
}