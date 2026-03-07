import { useState } from 'react';
import { productData } from '../data';
import styles from './ConsultancyForm.module.css';

export default function ConsultancyForm() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        phone: '',
        concern: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, age, phone, concern } = formData;
        const message = `*Free Consultancy Request*%0A%0A*Name:* ${name}%0A*Age:* ${age}%0A*Phone:* ${phone}%0A*Concern:* ${concern}`;
        const whatsappUrl = `https://wa.me/${productData.whatsapp}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className={styles.section} id="consultancy-form">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Free Consultancy</span>
                    <h2 className={styles.title}>📩 Free Personalized Consultation</h2>
                    <p className={styles.subtitle}>Submit for Free Consultancy — get personalized advice from our Ayurvedic experts via WhatsApp.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                placeholder="Years"
                                required
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Mobile number"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="concern">How can we help you?</label>
                        <textarea
                            id="concern"
                            name="concern"
                            placeholder="Describe your health concern..."
                            rows="3"
                            required
                            value={formData.concern}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        <span>🚀</span> GET FREE CONSULTANCY ON WHATSAPP
                    </button>
                </form>
            </div>
        </section>
    );
}
