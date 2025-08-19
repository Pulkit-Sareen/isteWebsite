import React, { useState } from 'react';
import styles from "./EventPage.module.css";
//Society Fair
import simg1 from "../../assets/Pastevents/sIMG1.png";
import simg2 from "../../assets/Pastevents/sIMG2.png";
import simg3 from "../../assets/Pastevents/sIMG3.png";
import simg4 from "../../assets/Pastevents/sIMG4.png";
import simg5 from "../../assets/Pastevents/sIMG5.png";
//colloquium
import cimg1 from "../../assets/Pastevents/cIMG1.png";
import cimg2 from "../../assets/Pastevents/cIMG2.png";
import cimg3 from "../../assets/Pastevents/cIMG3.png";
import cimg4 from "../../assets/Pastevents/cIMG4.png";
import cimg5 from "../../assets/Pastevents/cIMG5.png";
//playnovate
import pimg1 from "../../assets/Pastevents/pIMG1.png";
import pimg2 from "../../assets/Pastevents/pIMG2.png";
import pimg3 from "../../assets/Pastevents/pIMG3.png";
import pimg4 from "../../assets/Pastevents/pIMG4.png";
import pimg5 from "../../assets/Pastevents/pIMG5.png";
//hackathon
import himg1 from "../../assets/Pastevents/intra hack.png";
import himg2 from "../../assets/Pastevents/hIMG2.png";
import himg3 from "../../assets/Pastevents/hIMG3.png";
import himg4 from "../../assets/Pastevents/hIMG4.png";
import himg5 from "../../assets/Pastevents/hIMG5.png";
//orientation
import oimg1 from "../../assets/Pastevents/oIMG1.png";
import oimg2 from "../../assets/Pastevents/oIMG2.png";
import oimg3 from "../../assets/Pastevents/oIMG3.png";
import oimg4 from "../../assets/Pastevents/oIMG4.png";
import oimg5 from "../../assets/Pastevents/oIMG5.png";


const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const featuredEvents = [
        {
            id: 1,
            title: "Society Fair 2024",
            date: "August 31, 2024",
            time: "10:00 AM - 6:00 PM",
            location: "Main Lawn, Thapar University",
            category: "Fair",
            description: "An engaging fair showcasing all university societies, clubs, and student groups. Students explored opportunities, interacted with members, and registered for activities.",
            date_held: "August 2024",
            attendees: 5000,
            photos: [
                {
                    src: simg1,
                    alt: "Explore our society stall"
                },
                {
                    src: simg2,
                    alt: "Memory chart display"
                },
                {
                    src: simg3,
                    alt: "Students interacting with club members"
                },
                {
                    src: simg4,
                    alt: "Information booths at society fair"
                },
                {
                    src: simg5,
                    alt: "Stall showcasing creative society projects"
                }
            ]
        },
        {
            id: 2,
            title: "Orientation 2024",
            date: "September 1, 2024",
            time: "9:00 AM - 1:00 PM",
            location: "Main Auditorium, Thapar University",
            category: "Orientation",
            description: "A welcome event for the incoming batch, featuring sessions from faculty, student leaders, and alumni to guide freshers through campus life and academic resources.",
            date_held: "September 2024",
            attendees: 450,
            photos: [
                {
                    src: oimg1,
                    alt: "Our Society Orientation"
                },
                {
                    src: oimg2,
                    alt: "Speaker addressing orientation attendees"
                },
                {
                    src: oimg3,
                    alt: "Red bull competition"
                },
                {
                    src: oimg4,
                    alt: "Students interacting"
                },
                {
                    src: oimg5,
                    alt: "Panel discussion during orientation"
                }
            ]
        },
        {
            id: 3,
            title: "Playnnovate 2024",
            date: "November 14, 2024",
            time: "10:00 AM - 5:00 PM",
            location: "Innovation Hub, Thapar University",
            category: "Competition",
            description: "An exciting blend of playful creativity and innovative challenges where participants engaged in interactive problem-solving games and competitions.",
            date_held: "November 2024",
            attendees: 200,
            photos: [
                {
                    src: pimg1,
                    alt: "Playnnovate->interactive problem-solving games and Competition"
                },
                {
                    src: pimg5,
                    alt: "Participants engaging in competition"
                },
                {
                    src: pimg3,
                    alt: "Team strategy planning"
                },
                {
                    src: pimg4,
                    alt: "Creative Gameplay Begins!"
                },
                {
                    src: pimg2,
                    alt: "ISTE team after event"
                }
            ]
        },
        {
            id: 4,
            title: "Colloquium 2025",
            date: "February 17-21, 2025",
            time: "10:00 AM - 8:00 PM",
            location: "Various Venues, Thapar University",
            category: "Festival",
            description: "A multi-day flagship technical fest featuring exciting competitions, workshops, and sub-events attracting talent from across the region.",
            date_held: "February 2025",
            attendees: 1000,
            photos: [
                {
                    src: cimg3,
                    alt: "Colloquium->multi-day flagship technical fest"
                },
                {
                    src: cimg2,
                    alt: "Team based competition"
                },
                {
                    src: cimg4,
                    alt: "Gaming zone"
                },
                {
                    src: cimg5,
                    alt: "Team strategy planning"
                },
                {
                    src: cimg1,
                    alt: "ISTE team after colloquium"
                }
            ],
            subEvents: [
                {
                    title: "Web Vida",
                    date: "February 17, 2025"
                },
                {
                    title: "Wit Wars",
                    date: "February 18, 2025"
                },
                {
                    title: "OverThrone",
                    date: "February 19, 2025"
                },
                {
                    title: "Flag Heist",
                    date: "February 21, 2025"
                }
            ]
        },
        {
            id: 5,
            title: "Intra Society Hackathon 2025",
            date: "June 21, 2025",
            time: "9:00 AM - 9:00 PM",
            location: "Computer Science Department, Thapar University",
            category: "Hackathon",
            description: "An internal hackathon for society members to collaborate, innovate, and build creative solutions in a single day of intense coding.",
            date_held: "June 2025",
            attendees: 60,
            photos: [
                {
                    src: himg1,
                    alt: "Hackathon teams coding"
                },
                {
                    src: himg2,
                    alt: "Deadline with Timeline"
                },
                {
                    src: himg3,
                    alt: "Society Sphere->Best Project"
                },
                {
                    src: himg4,
                    alt: "Final Presentation Day"
                },
                {
                    src: himg5,
                    alt: "Winner announcement"
                }
            ]
        }

    ];

    const getCategoryColor = (category) => {
        switch (category) {
            case 'Conference':
                return '#4A90E2';
            case 'Workshop':
                return '#7B68EE';
            case 'Competition':
                return '#FF6B6B';
            case 'Seminar':
                return '#4ECDC4';
            case 'Meetup':
                return '#45B7D1';
            case 'Exhibition':
                return '#E91E63';
            default:
                return '#9E9E9E';
        }
    };

    const handleViewPhotos = (event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
        document.body.style.overflow = 'auto';
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    return (
        <main className={styles.eventSection}>
            <div className={styles.eventContainer}>
                {/* Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle} data-testid="hero-title">
                            ISTE Events
                        </h1>
                        <p className={styles.heroSubtitle} data-testid="hero-subtitle">
                            Explore the successful events organized by ISTE Thapar Chapter.
                            Our society has conducted numerous workshops, conferences, and competitions to foster technical excellence.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-testid="stat-events">10+</span>
                                <span className={styles.statLabel}>Events Last Year</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-testid="stat-participants">1000+</span>
                                <span className={styles.statLabel}>Participants</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-testid="stat-speakers">2</span>
                                <span className={styles.statLabel}>Speaker Sessions</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Events */}
                <section className={styles.featuredEvents}>
                    <h2 className={styles.sectionTitle} data-testid="featured-events-title">Past Events</h2>
                    <div className={styles.featuredGrid}>
                        {featuredEvents.map((event) => (
                            <div key={event.id} className={styles.featuredCard} data-testid={`featured-card-${event.id}`}>
                                <div className={styles.cardImage}>
                                    <img
                                        src={event.photos[0]?.src || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"}
                                        alt={event.title}
                                        className={styles.eventImage}
                                        data-testid={`event-image-${event.id}`}
                                    />
                                    <div className={styles.imageOverlay}>
                                        {/* <div
                                            className={styles.eventCategoryBadge}
                                            style={{ backgroundColor: getCategoryColor(event.category) }}
                                            data-testid={`event-category-${event.id}`}
                                        >
                                            {event.category}
                                        </div> */}
                                    </div>
                                </div>
                                <div className={styles.cardHeader}>
                                    <div className={styles.eventInfo}>
                                        <h3 className={styles.eventTitle} data-testid={`event-title-${event.id}`}>
                                            {event.title}
                                        </h3>
                                        <div className={styles.eventMeta}>
                                            <span className={styles.eventDate} data-testid={`event-date-${event.id}`}>
                                                📅 {event.date}
                                            </span>
                                            <span className={styles.eventTime} data-testid={`event-time-${event.id}`}>
                                                ⏰ {event.time}
                                            </span>
                                            <span className={styles.eventLocation} data-testid={`event-location-${event.id}`}>
                                                📍 {event.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.cardBody}>
                                    <p className={styles.eventDescription} data-testid={`event-description-${event.id}`}>
                                        {event.description}
                                    </p>
                                </div>
                                <div className={styles.cardFooter}>
                                    <div className={styles.attendanceInfo}>
                                        <span className={styles.attendanceText} data-testid={`attendance-text-${event.id}`}>
                                            {event.attendees} participants attended
                                        </span>
                                        <div className={styles.eventDateHeld}>
                                            <span className={styles.dateHeldText}>Event Date: {event.date_held}</span>
                                        </div>
                                    </div>
                                    <button
                                        className={styles.photosBtn}
                                        onClick={() => handleViewPhotos(event)}
                                        data-testid={`photos-btn-${event.id}`}
                                    >
                                        📸 Photos
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Photo Gallery Modal */}
                {isModalOpen && selectedEvent && (
                    <div
                        className={styles.modalOverlay}
                        onClick={closeModal}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                        data-testid="photo-modal-overlay"
                    >
                        <div
                            className={`${styles.modalContent} ${styles.fadeIn}`}
                            onClick={(e) => e.stopPropagation()}
                            data-testid="photo-modal-content"
                        >
                            <div className={styles.modalHeader}>
                                <h3 className={styles.modalTitle} data-testid="modal-title">
                                    {selectedEvent.title} - Photo Gallery
                                </h3>
                                <button
                                    className={styles.closeBtn}
                                    onClick={closeModal}
                                    data-testid="close-modal-btn"
                                    aria-label="Close photo gallery"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className={styles.modalBody}>
                                <div className={styles.photoGrid} data-testid="photo-grid">
                                    {selectedEvent.photos.map((photo, index) => (
                                        <div key={index} className={styles.photoItem} data-testid={`photo-item-${index}`}>
                                            <img
                                                src={photo.src}
                                                alt={photo.alt}
                                                loading="lazy"
                                                data-testid={`photo-${index}`}
                                            />
                                            <div className={styles.photoCaption} data-testid={`photo-caption-${index}`}>
                                                {photo.alt}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default EventsPage;