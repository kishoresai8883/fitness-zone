import { Program, MembershipPlan, Trainer, Testimonial, ScheduleItem, TransformationStory } from '../types';

export const GYM_DETAILS = {
  name: 'Fitness Zone',
  tagline: 'Hyderabad’s Premier High-Energy Gym & Fitness Center',
  phone: '9550637183',
  phoneFormatted: '+91 95506 37183',
  whatsappUrl: 'https://wa.me/919550637183?text=Hi%20Fitness%20Zone%20Hyderabad!%20I%20would%20like%20to%20book%20a%20Free%20Trial%20Pass.',
  address: '3 floor, 12-7-88-4/A, beside chittaramma temple, above sweetshop, AGI Colony, Moosapet, Hyderabad, Telangana 500018',
  area: 'Moosapet, Hyderabad',
  googleMapsUrl: 'https://maps.app.goo.gl/4j4W662oM7tB29Qf8',
  hours: {
    weekdays: '6:00 AM – 10:00 PM',
    saturday: '6:00 AM – 10:00 PM',
    sunday: '7:00 AM – 1:00 PM',
  },
  stats: [
    { value: '1,800+', label: 'Active Members' },
    { value: '10,000 sq ft', label: 'Spacious Gym Area' },
    { value: '12+', label: 'Certified Elite Trainers' },
    { value: '98%', label: 'Success Transformation' },
  ],
};

export const PROGRAMS: Program[] = [
  {
    id: 'strength-hypertrophy',
    title: 'Strength & Bodybuilding Zone',
    category: 'strength',
    description: 'Heavy duty resistance machines, Olympic barbells, power racks & dedicated free weights zone for maximum muscle growth.',
    fullDetails: 'Equipped with top-tier Hammer Strength and Life Fitness resistance gear. Ideal for hypertrophy, powerlifting, progressive overload, and athletic sculpting.',
    duration: '60 - 75 Mins',
    intensity: 'All Levels',
    features: ['Olympic Barbell Racks', 'Dumbbells up to 50kg', 'Form Coaching by Trainers', 'Custom Split Routines'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    popular: true,
  },
  {
    id: 'personal-transformation',
    title: '1-on-1 Personal Transformation',
    category: 'personal',
    description: 'Tailored 1-on-1 coaching, personalized workouts, progress tracking, and customized Hyderabad diet/macro planning.',
    fullDetails: 'Get dedicated attention from K11/ACE certified coaches who track every set, optimize your technique, and build a sustainable Indian nutrition plan for guaranteed results.',
    duration: '60 Mins',
    intensity: 'Intermediate',
    features: ['Dedicated Certified Coach', 'Custom South/North Indian Meal Plan', 'Weekly Body Comp Scans', 'Strict Accountability'],
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    popular: true,
  },
  {
    id: 'hiit-fatloss',
    title: 'HIIT & Fat Loss Burnout',
    category: 'cardio',
    description: 'High-intensity interval training designed to spike metabolism, torch maximum calories, and improve cardiovascular stamina.',
    fullDetails: 'Dynamic group workouts combining battle ropes, plyometrics, kettlebells, rowers, and air bikes to keep your body burning calories for hours post-workout.',
    duration: '45 Mins',
    intensity: 'Advanced',
    features: ['High Calorie Burn', 'Heart Rate Based Tracking', 'Agility & Conditioning', 'Energy Boosting Music'],
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'zumba-dance',
    title: 'Zumba & Group Dance Fitness',
    category: 'group',
    description: 'Fun, calorie-burning rhythmic cardio sessions set to electrifying music for full-body fitness and endurance.',
    fullDetails: 'Join vibrant group dance sessions led by energetic licensed instructors. Burn up to 600 calories while having fun with fellow fitness enthusiasts.',
    duration: '60 Mins',
    intensity: 'All Levels',
    features: ['High Energy Choreography', 'Cardio Endurance', 'Stress Relief', 'Includes Aerobics Mix'],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'yoga-flexibility',
    title: 'Yoga & Core Mobility',
    category: 'wellness',
    description: 'Mindful posture work, breathing techniques, core strengthening, and joint mobility to prevent injury and enhance recovery.',
    fullDetails: 'Designed to balance intense weightlifting sessions with deep stretching, spinal health, posture correction, and mental serenity.',
    duration: '60 Mins',
    intensity: 'Beginner',
    features: ['Flexibility Improvement', 'Postural Alignment', 'Breathwork (Pranayama)', 'Core Activation'],
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cross-functional',
    title: 'Cross-Functional Conditioning',
    category: 'strength',
    description: 'Athletic movement, sledgehammers, tire flips, sled pushes, and gymnastics rings for functional real-world strength.',
    fullDetails: 'Test your limits with multi-joint functional movements that improve coordination, grip strength, explosion, and athletic performance.',
    duration: '50 Mins',
    intensity: 'Advanced',
    features: ['Prowler Sled Tracks', 'Kettlebell Workouts', 'Core Explosion', 'Stamina & Agility'],
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800',
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'monthly',
    name: '1 Month Starter',
    duration: '1 Month',
    price: '₹2,999',
    tagline: 'Ideal for getting started & experiencing the environment',
    features: [
      'Full Access to Gym Floor & Cardio Zone',
      'Initial Trainer Assessment & Orientation',
      'Locker & Steam Room Access',
      'Mobile Fitness Zone Member App',
      'Flexible Month-to-Month'
    ],
  },
  {
    id: 'quarterly',
    name: '3 Month Transformation',
    duration: '3 Months',
    price: '₹6,999',
    originalPrice: '₹8,997',
    savings: 'Save ₹1,998',
    tagline: 'Most Popular for Visible Body Transformation',
    popular: true,
    features: [
      'Everything in 1 Month Plan',
      'Free Customized Meal & Macro Chart',
      '2 Free 1-on-1 Personal Training Sessions',
      'Monthly InBody Composition Scan',
      'Access to All Group Classes (Zumba/Yoga)',
      'Free Fitness Zone Shaker Bottle'
    ],
  },
  {
    id: 'annual',
    name: '12 Month Elite',
    duration: '1 Year',
    price: '₹17,999',
    originalPrice: '₹35,988',
    savings: 'Save 50%',
    tagline: 'Best Value for Long-term Lifestyle Excellence',
    features: [
      'Unlimited 365 Days Access',
      '5 Free Personal Training Sessions',
      'Bi-Weekly Nutrition & Diet Adjustments',
      'Unlimited Steam Bath & Locker Facility',
      'Complimentary Guest Passes (2/month)',
      'Pause Membership up to 45 Days'
    ],
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: 'vikram-reddy',
    name: 'Vikram Reddy',
    role: 'Head Strength Coach & Founder',
    experience: '11+ Years Experience',
    specialties: ['Bodybuilding', 'Powerlifting', 'Posture Correction'],
    bio: 'Former State Bodybuilding Champion certified by ACE. Specializes in heavy compound movements and physique transformation.',
    imageUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'sneha-rao',
    name: 'Sneha Rao',
    role: 'Senior HIIT & Nutrition Specialist',
    experience: '7+ Years Experience',
    specialties: ['Fat Loss', 'Female Fitness', 'Clinical Nutrition'],
    bio: 'Certified Clinical Sports Nutritionist and Zumba Specialist. Helped over 400+ women achieve sustainable body transformations.',
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'arjun-varma',
    name: 'Arjun Varma',
    role: 'Functional & Cross-Training Lead',
    experience: '8+ Years Experience',
    specialties: ['Athletic Performance', 'Kettlebells', 'Calisthenics'],
    bio: 'K11 Certified Master Trainer focused on functional movement patterns, explosive power, and injury-free endurance building.',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rahul Sharma',
    area: 'Jubilee Hills, Hyderabad',
    role: 'Software Architect',
    achievement: 'Lost 14 kg in 4 Months',
    review: 'Fitness Zone transformed my lifestyle! Being an IT professional sitting 10 hours a day, I had severe back pain and weight gain. Coach Vikram built a realistic plan that fit my work schedule. Best gym in Jubilee Hills!',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    program: 'Personal Training + Fat Loss',
  },
  {
    id: 't2',
    name: 'Priya Mukherjee',
    area: 'Madhapur, Hyderabad',
    role: 'Product Designer',
    achievement: 'Gained Tone & Reduced Body Fat %',
    review: 'The energy at Fitness Zone is unmatched. Super clean facilities, friendly coaches, and a very safe & empowering environment for women. Sneha ma’am’s diet chart worked wonders without starving!',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    program: 'Zumba & Strength Training',
  },
  {
    id: 't3',
    name: 'Karthik Raju',
    area: 'Gachibowli, Hyderabad',
    role: 'Entrepreneur',
    achievement: 'Gained 7 kg Lean Muscle Mass',
    review: 'The equipment here is world-class! Squat racks, deadlift platforms, and top-notch dumbbells. Staff maintains high hygiene standards. Highly recommend the 3-month transformation pack!',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    program: 'Hypertrophy & Strength',
  },
];

export const TRANSFORMATION_STORIES: TransformationStory[] = [
  {
    id: 'story-1',
    name: 'Siddharth Rao',
    age: 32,
    timeframe: '16 Weeks',
    weightLoss: 'Lost 18 kg & 6 Inches Waist',
    story: 'Reduced cholesterol, built solid chest and shoulder definition, and boosted energy levels tremendously.',
    beforeImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400',
    afterImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400', // Crisp fitness shot
  },
  {
    id: 'story-2',
    name: 'Ananya Reddy',
    age: 28,
    timeframe: '12 Weeks',
    weightLoss: 'Lost 11 kg & Tone Core',
    story: 'Shifted from zero workout routine to consistent 5-day strength & HIIT training. Incredible confidence boost!',
    beforeImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
    afterImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
  },
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  { id: 's1', time: '06:30 AM - 07:30 AM', className: 'Morning HIIT Burn', instructor: 'Sneha Rao', type: 'Cardio', room: 'Group Studio 1', days: ['Mon', 'Wed', 'Fri'] },
  { id: 's2', time: '07:30 AM - 08:30 AM', className: 'Power Yoga & Core', instructor: 'Swati K.', type: 'Wellness', room: 'Mind & Body Room', days: ['Tue', 'Thu', 'Sat'] },
  { id: 's3', time: '06:00 PM - 07:00 PM', className: 'Zumba Dance Fitness', instructor: 'Sneha Rao', type: 'Group', room: 'Main Dance Studio', days: ['Mon', 'Wed', 'Fri'] },
  { id: 's4', time: '07:00 PM - 08:00 PM', className: 'Cross-Functional Blast', instructor: 'Arjun Varma', type: 'Strength', room: 'Turf & Functional Zone', days: ['Tue', 'Thu', 'Sat'] },
  { id: 's5', time: '08:00 PM - 09:00 PM', className: 'Heavy Lifting Clinic', instructor: 'Vikram Reddy', type: 'Strength', room: 'Free Weight Area', days: ['Mon', 'Wed', 'Fri'] },
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Dumbbell',
    title: 'Imported Heavy-Duty Equipment',
    description: 'Bio-mechanically tuned Hammer Strength, Life Fitness racks, and dual pulley cables for smooth, effective reps.',
  },
  {
    icon: 'Award',
    title: 'Certified Master Coaches',
    description: 'Every trainer holds international ACSM/K11/ACE certifications with hands-on expertise in form correction and safety.',
  },
  {
    icon: 'Utensils',
    title: 'Tailored Indian Diet Plans',
    description: 'No impossible starvation diets. We build sustainable macro plans around biryanis, rotis, rice, and local protein options.',
  },
  {
    icon: 'Users',
    title: 'Motivating & Clean Vibe',
    description: 'Spacious 10,000 sq ft facility sanitized round the clock with high-octane acoustics and a warm supportive community.',
  },
];
