import React from 'react'
import styles from './profile.module.css'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { CiBasketball } from "react-icons/ci";


const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.container}>
                <div className={styles.wrapper}>

                    <div className={styles.upperPart}>
                        <div className={styles.userProfile}>
                            <Image src={'/images/profile.png'} width={100} height={100} alt='' className={styles.image} />
                        </div>
                    </div>

                    <div className={styles.lowerPart}>
                        <div className={styles.username}>
                            <h2>Johnny Rogers</h2>
                            <p>@johnnyrogers</p>
                        </div>
                        <div className={styles.icons}>
                            <FaFacebook size={'20px'} />
                            <FaLinkedin size={'20px'} />
                            <RiTwitterXFill size={'20px'} />
                            <AiFillInstagram size={'20px'} />
                            <CiBasketball size={'20px'} />
                        </div>

                        <div className={styles.about}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio debitis ut pariatur. Quos ab fuga voluptatum, ducimus molestiae inventore. Minima repellat eos fugit eveniet veniam.</p>
                        </div>

                        <div className={styles.btns}>
                            <button className={styles.followBtns}>Follow</button>
                            <button className={styles.Message}>Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile