function registerProgram(programId) {
            // Add click animation
            event.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                event.target.style.transform = 'scale(1)';
            }, 150);

            // Registration logic
            console.log(`Registration initiated for: ${programId}`);
            
            // You can replace this with your actual registration system
            // For example: redirect to registration form or open modal
            alert(`Thank you for your interest in our ${programId.replace('-', ' ')} program! You will be redirected to the registration form.`);
            
            // Example redirect (uncomment and modify as needed):
            // window.location.href = `/programs/register/${programId}`;
        }

        // Smooth entrance animations
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.program-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';
                observer.observe(card);
            });
        });