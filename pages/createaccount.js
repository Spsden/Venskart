import React from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import { Input, Spacer } from "@nextui-org/react";
import Head from "next/head";


const SignUp = () => {
  return (
    <>
    <Head>
      <title>Create account | Venskart</title>
    </Head>
      <div className={styles.parentContainer}>
        <div className={styles.leftContainer}>
          {/* <h1>Graphics will go here.</h1> */}
          <img src="./1.png" className="images" ></img>
        </div>
        <div className={styles.rightContainer}>
          <h2 className={styles.loginTitle}>Create an Account</h2>
          <form className={styles.loginForm}>
            <Input
              shadow={false}
              underlined
              // label="Email"
              labelPlaceholder="Enter your Name"
              required
              type="text"
              className={styles.loginInput}
            />
            <Spacer y={1.5} />
            <Input
              shadow={false}
              underlined
              // label="Email"
              labelPlaceholder="Enter your Email"
              required
              type="email"
              className={styles.loginInput}
            />

            <Spacer y={1.5} />
            <Input.Password
              underlined
              labelPlaceholder="Enter your Password"
              required
              type="password"
              className={styles.loginInput}
            />
            <Spacer y={1.5} />
            <Input.Password
              underlined
              labelPlaceholder="Confirm your Password"
              required
              type="password"
              className={styles.loginInput}
            />
            <Spacer y={1} />

            <button className={styles.loginButton}>SignUp</button>
            <Spacer y={1} />

            <div className={styles.createAcc}>
              <Link href="/login">
                <a className={styles.signUp}>Already have account? Login</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
