import { useState } from 'react';
import { productData } from '../data';
import styles from './ConsultancyModal.module.css';

export default function ConsultancyModal({ isOpen, onClose }) {
    if (!isOpen) return null;

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
        onClose(); // auto close on submit
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>&times;</button>
                <div className={styles.header}>
                    <span className={styles.badge}>Free Consultancy</span>
                    <h2 className={styles.title}>📩 Personalized Advice</h2>
                    <p className={styles.subtitle}>Get advice from our Ayurvedic experts via WhatsApp.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="modal-name">Full Name</label>
                        <input type="text" id="modal-name" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="modal-age">Age</label>
                            <input type="number" id="modal-age" name="age" placeholder="Years" required value={formData.age} onChange={handleChange} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="modal-phone">Phone Number</label>
                            <input type="tel" id="modal-phone" name="phone" placeholder="Mobile number" required value={formData.phone} onChange={handleChange} />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="modal-concern">How can we help you?</label>
                        <textarea id="modal-concern" name="concern" placeholder="Describe your health concern..." rows="3" required value={formData.concern} onChange={handleChange}></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        <span>🚀</span> GET FREE CONSULTANCY ON WHATSAPP
                    </button>
                </form>
            </div>
        </div>
    );
}
