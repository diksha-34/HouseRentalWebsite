
House Rental Website
Welcome to the House Rental Website repository! This project is a full-stack application that facilitates searching for rental homes, viewing details, booking homes, and receiving personalized recommendations. The application leverages Spring Boot for the backend, React for the frontend, and machine learning for recommendations.

Table of Contents
Features
Technologies Used
Setup Instructions
Usage
Contributing

Features
Home Search: Users can search for rental homes using various filters.
Detailed View: View detailed information about each home, including images, description, and amenities.
Booking: Book homes for rent using the Razorpay payment gateway.
Recommendations: Personalized home recommendations based on user preferences and search history.
Technologies Used
Frontend
React
HTML
CSS (Tailwind CSS, Bootstrap)
JavaScript
Backend
Spring Boot
REST API
Machine Learning
Recommendation System
Payment Gateway
Razorpay
Setup Instructions
Prerequisites
Java 8 or higher
Node.js
Maven
MySQL or any preferred database
Razorpay Account
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/house-rental-website.git
cd house-rental-website/backend
Configure the database:
Update the application.properties file with your database configurations.

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/yourdatabase
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
Install dependencies and run the backend:

bash
Copy code
mvn clean install
mvn spring-boot:run
Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Start the frontend server:

bash
Copy code
npm start
Machine Learning Setup
Navigate to the ML directory:

bash
Copy code
cd ../ml
Install dependencies and setup the environment (e.g., using Python and required libraries):

bash
Copy code
pip install -r requirements.txt
Run the recommendation service:

bash
Copy code
python recommend_service.py
Usage
Access the website:
Open your browser and go to http://localhost:3000.

Search for homes:
Use the search bar and filters to find rental homes.

View details:
Click on a home to see detailed information.

Book a home:
Use the booking feature to rent a home, with payment processing through Razorpay.

Get recommendations:
Receive personalized recommendations based on your interactions.

Contributing
We welcome contributions to this project! To contribute, please follow these steps:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature/your-feature-name
Make your changes and commit them:
bash
Copy code
git commit -m 'Add some feature'
Push to the branch:
bash
Copy code
git push origin feature/your-feature-name
Create a pull request.
![Screenshot (555)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/a2f59b89-d2d6-4929-8236-ac6cc04747df)
![Screenshot (556)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/916d98c9-d35f-46bf-9405-3e0a1ba03f08)
![Screenshot (557)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/429dae46-a732-48ac-ae4f-a83759ca5bce)
![Screenshot (558)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/4e328ac3-28f2-4ddd-8b19-7eddea176b17)
![Screenshot (559)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/deeb109f-fdcd-431a-94f9-846fff03b4b7)
![Screenshot (560)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/061cb31a-8442-4885-98d1-10bb09f87427)
![Screenshot (561)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/ad425477-33fb-491a-8399-b101b7f96d87)
![Screenshot (562)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/d693275e-e539-4718-8c05-be78b66fdbee)
![Screenshot (563)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/ac6e7840-853a-4bda-a41c-8f16e2252a23)
![Screenshot (564)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/83528517-ef87-48e0-afe9-6dbcd610ebc9)
![Screenshot (565)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/65cb7c44-863c-49c1-81fe-addfa4f9dc2f)
![Screenshot (566)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/ce7dc849-648c-481d-8d43-84f9c0a5db6f)
![Screenshot (567)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/6cdaa149-5c41-4642-9654-6847312b668f)
![Screenshot (568)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/1b1a93ed-fea5-448e-8d49-7f8b0724e5eb)
![Screenshot (569)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/7182079a-3b06-4d9f-a9bd-537974f90812)
![Screenshot (570)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/c05911fa-2c3a-4535-8570-aa22a702e6b3)
![Screenshot (571)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/6a6acf3e-3397-44ef-8565-fc55de883424)
![Screenshot (572)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/28c0595f-6528-4f3b-ad9d-c7f6c70ecf5d)
![Screenshot (573)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/bab27c2e-5eba-44c3-bbbb-ad2730ca9a87)
![Screenshot (574)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/00bc0b70-38aa-426f-b688-164760aeac97)
![Screenshot (575)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/ec9d34f5-4ebe-4642-aafe-64457797bf58)
![Screenshot (576)](https://github.com/diksha-34/HouseRentalWebsite/assets/116185338/5b8ea555-8915-4627-a138-713ea77fc96d)
Thank you for checking out our project! If you have any questions, feel free to open an issue or contact us. Happy coding!

