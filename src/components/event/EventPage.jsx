import React, { useState } from 'react';
import styles from "./EventPage.module.css";

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
                    src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Crowd exploring society stalls"
                },
                {
                    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Students interacting with club members"
                },
                {
                    src: "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Stall showcasing creative society projects"
                },
                {
                    src: "https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Information booths at society fair"
                },
                {
                    src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Performance at the fair"
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
                    src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Freshers seated in auditorium"
                },
                {
                    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Speaker addressing orientation attendees"
                },
                {
                    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Student leaders introducing societies"
                },
                {
                    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Orientation networking break"
                },
                {
                    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
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
                    src: "https://images.unsplash.com/photo-1606761568499-6a21efae2e54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Participants engaged in creative game"
                },
                {
                    src: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Team strategy planning"
                },
                {
                    src: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Winners receiving awards"
                },
                {
                    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Audience cheering for teams"
                },
                {
                    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Creative challenge session"
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
                    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Crowds at Colloquium main stage"
                },
                {
                    src: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Workshop during Colloquium"
                },
                {
                    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Gaming zone"
                },
                {
                    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Team celebration after winning"
                },
                {
                    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Audience at Colloquium stage"
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
                    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Hackathon teams coding"
                },
                {
                    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Mentor guiding team"
                },
                {
                    src: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Team discussion"
                },
                {
                    src: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
                    alt: "Final presentation"
                },
                {
                    src: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
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