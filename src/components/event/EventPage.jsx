import React, { useState } from 'react';
import styles from "./EventPage.module.css";

const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const featuredEvents = [
        {
            id: 1,
            title: "Tech Innovation Summit 2025",
            date: "March 15-17, 2025",
            time: "9:00 AM - 6:00 PM",
            location: "Main Auditorium, Thapar University",
            category: "Conference",
            description: "A three-day summit featuring cutting-edge technology discussions, workshops, and networking opportunities with industry leaders. Successfully concluded with record attendance.",
            date_held: "March 2024",
            attendees: 285,
            photos: [
                {
                    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Keynote speaker at Tech Innovation Summit"
                },
                {
                    src: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Panel discussion with industry experts"
                },
                {
                    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Networking session at summit"
                },
                {
                    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Tech exhibition and demo booths"
                },
                {
                    src: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Award ceremony at summit conclusion"
                }
            ]
        },
        {
            id: 2,
            title: "Hackathon: Code for Good",
            date: "February 28, 2024",
            time: "24 Hours",
            location: "Computer Science Department",
            category: "Competition",
            description: "A successful 24-hour hackathon that focused on developing solutions for social impact. Teams built innovative solutions addressing real-world problems.",
            date_held: "February 2024",
            attendees: 142,
            photos: [
                {
                    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Teams coding during hackathon"
                },
                {
                    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Brainstorming session during hackathon"
                },
                {
                    src: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Mentors guiding hackathon participants"
                },
                {
                    src: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Final project presentations"
                },
                {
                    src: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Winning team celebration"
                }
            ]
        },
        {
            id: 3,
            title: "AI & Machine Learning Workshop",
            date: "February 15, 2024",
            time: "2:00 PM - 5:00 PM",
            location: "Lab 301, Engineering Block",
            category: "Workshop",
            description: "An intensive hands-on workshop covering the fundamentals of AI and ML with practical implementation using Python and TensorFlow. Participants gained valuable insights into modern AI techniques.",
            date_held: "February 2024",
            attendees: 48,
            photos: [
                {
                    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Instructor explaining AI concepts"
                },
                {
                    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Hands-on coding session"
                },
                {
                    src: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Group discussion on ML algorithms"
                },
                {
                    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Certificate distribution ceremony"
                },
                {
                    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Neural network visualization demo"
                }
            ]
        },
        {
            id: 4,
            title: "Digital Innovation Expo 2024",
            date: "January 20-21, 2024",
            time: "10:00 AM - 8:00 PM",
            location: "Innovation Hub, Thapar University",
            category: "Exhibition",
            description: "A spectacular showcase of digital innovations and emerging technologies featuring interactive demos, startup exhibitions, and industry partnerships.",
            date_held: "January 2024",
            attendees: 320,
            photos: [
                {
                    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Interactive technology displays"
                },
                {
                    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Startup exhibition booths"
                },
                {
                    src: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "VR/AR demonstration zone"
                },
                {
                    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Robotics showcase area"
                },
                {
                    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Busy expo floor with visitors"
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
                            ISTE Thapar Chapter Events
                        </h1>
                        <p className={styles.heroSubtitle} data-testid="hero-subtitle">
                            Explore the successful events organized by ISTE Thapar Chapter.
                            Our society has conducted numerous workshops, conferences, and competitions to foster technical excellence.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-testid="stat-events">15+</span>
                                <span className={styles.statLabel}>Events This Year</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-testid="stat-participants">500+</span>
                                <span className={styles.statLabel}>Participants</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber} data-testid="stat-speakers">20+</span>
                                <span className={styles.statLabel}>Speakers</span>
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
                                        <div
                                            className={styles.eventCategoryBadge}
                                            style={{ backgroundColor: getCategoryColor(event.category) }}
                                            data-testid={`event-category-${event.id}`}
                                        >
                                            {event.category}
                                        </div>
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