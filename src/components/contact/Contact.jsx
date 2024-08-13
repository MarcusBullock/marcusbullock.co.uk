import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { slideIn } from '../../utils/motion';
import SectionWrapper from './../../hoc/SectionWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.css';
import classNames from 'classnames';

const initialFormState = {
    name: '',
    email: '',
    message: '',
    isSubmitted: false,
    error: '',
};

function Contact({ theme }) {
    const [formState, setFormState] = useState(initialFormState);
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    }

    function setError(error) {
        setFormState({ ...formState, error });
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function submitForm(e) {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!formState.email || !formState.message || !formState.name) {
            setLoading(false);
            setError('Please provide all values');
            return;
        }

        if (!validateEmail(formState.email)) {
            setLoading(false);
            setError('Please provide a valid email');
            return;
        }

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICEID,
                import.meta.env.VITE_EMAILJS_TEMPLATEID,
                {
                    from_name: formState.name,
                    to_name:
                        'Your Highness, Heroic Leader & Esteemed Emperor Marcus',
                    from_email: formState.email,
                    to_email: 'marcusbullock@hotmail.co.uk',
                    message: formState.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLICKEY
            )
            .then(
                () => {
                    setLoading(false);
                    setFormState({
                        name: '',
                        email: '',
                        message: '',
                        isSubmitted: true,
                    });
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    setError(
                        'How embarrassing, the email failed to send. I should find another line of work...'
                    );
                }
            );
    }

    return (
        <div className={styles.contact}>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 0.5)}
                className={classNames(
                    styles.contactMotion,
                    theme === 'light'
                        ? styles.lightModeForm
                        : styles.darkModeForm
                )}
            >
                <p className={styles.header}>Get in touch</p>
                <h3 className={styles.header2}>Contact.</h3>
                <form onSubmit={submitForm} className={styles.contactForm}>
                    <label className={styles.formLabel}>
                        <span className={styles.formLabelText}>Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className={styles.formInput}
                        />
                    </label>
                    <label className={styles.formLabel}>
                        <span className={styles.formLabelText}>Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className={styles.formInput}
                        />
                    </label>
                    <label className={styles.formLabel}>
                        <span className={styles.formLabelText}>
                            Your Message
                        </span>
                        <textarea
                            rows="7"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="What's your message?"
                            className={styles.formInput}
                        />
                    </label>
                    <div className={styles.row}>
                        <button
                            type="submit"
                            className={classNames(
                                styles.btn,
                                formState.isSubmitted ? styles.submitted : ''
                            )}
                            disabled={formState.isSubmitted}
                        >
                            <FontAwesomeIcon
                                icon={
                                    formState.isSubmitted ? faCheck : faEnvelope
                                }
                                color={
                                    formState.isSubmitted ? 'green' : faEnvelope
                                }
                                size="lg"
                            />
                            {loading
                                ? 'Sending'
                                : formState.isSubmitted
                                ? 'Email sent'
                                : 'Send'}
                        </button>
                        {formState.error && (
                            <span className={styles.error}>
                                {formState.error}
                            </span>
                        )}
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

export default SectionWrapper(Contact, 'contact');
