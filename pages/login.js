import React from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import { Input, Spacer } from "@nextui-org/react";
import Head from "next/head";

const Login = () => {
  return (
    <>
    <Head>
      <title>Login | Venskart</title>
    </Head>
      <div className={styles.parentContainer}>
        <div className={styles.leftContainer}>
          <img src="./1.png" className={styles.images}></img>
          {/* <h1>Graphics will go here.</h1> */}
        </div>
        <div className={styles.rightContainer}>
          <h2 className={styles.loginTitle}>Login</h2>
          <form className={styles.loginForm}>
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
              // labelLeft="lol"
              // size="Small"
              // label="Password"
              labelPlaceholder="Enter your Password"
              required
              type="password"
              className={styles.loginInput}
            />
            <Spacer y={1} />
            <button className={styles.loginButton}>Login</button>
          </form>
          <div className={styles.createAcc}>
            <Link href="/createaccount">
              <a className={styles.signUp}>
                New to Venskart? create an account
              </a>
            </Link>
            {/* <button className={styles.createAccButton}>SignUp</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
