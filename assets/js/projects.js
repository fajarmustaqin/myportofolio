const PORTFOLIO_PROJECTS = [
    {
        id: 'project1',
        title: 'E-Commerce Beeru',
        shortDesc: 'Platform reseller untuk produk Beeru dengan fitur order, tracking, dan komisi.',
        fullDesc: 'Reseller Beeru adalah platform reseller yang digunakan untuk membeli produk beeru. Platform ini memiliki fitur login, register, dashboard, product, dan pembayaran terintegrasi dengan payment gateway.',
        category: 'Web Development',
        categoryColor: 'blue',
        techStack: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'Git', 'Docker'],
        images: ['assets/img/projects/login-reseller.png', 'assets/img/projects/dashboard-reseller.png', 'assets/img/projects/product-reseller.png'],
        liveUrl: 'https://reseller.beeru.id/'
    },
    {
        id: 'project2',
        title: 'Reseller Beeru',
        shortDesc: 'Platform reseller untuk produk Beeru dengan fitur order, tracking, dan komisi.',
        fullDesc: 'Comprehensive education management system with interactive elements that streamline administrative tasks and enhance the learning experience for students and educators.',
        category: 'Web Development',
        categoryColor: 'blue',
        techStack: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'Git', 'Docker'],
        images: ['assets/img/projects/login-reseller.png', 'assets/img/projects/dashboard-reseller.png', 'assets/img/projects/product-reseller.png'],
        liveUrl: 'https://reseller.beeru.id/'
    },
    {
        id: 'project3',
        title: 'Reseller Beeru',
        shortDesc: 'Platform reseller untuk produk Beeru dengan fitur order, tracking, dan komisi.',
        fullDesc: 'Platform booking system untuk manajemen reservasi dengan fitur dashboard dan payment gateway terintegrasi. Sistem ini memungkinkan pelanggan untuk melakukan booking dengan mudah dan efisien.',
        category: 'Web Development',
        categoryColor: 'blue',
        techStack: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'Git', 'Docker'],
        images: ['assets/img/projects/login-reseller.png', 'assets/img/projects/dashboard-reseller.png', 'assets/img/projects/product-reseller.png'],
        liveUrl: 'https://reseller.beeru.id/'
    },
    {
        id: 'project4',
        title: 'ERP Dapur Cokelat',
        shortDesc: 'Dashboard untuk monitoring dan analisis data sistem DCI dengan visualisasi real-time.',
        fullDesc: 'Comprehensive education management system with interactive elements that streamline administrative tasks and enhance the learning experience for students and educators.',
        category: 'Web Development',
        categoryColor: 'teal',
        techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Git'],
        images: ['assets/img/projects/dci-login.png', 'assets/img/projects/dci-dashboard.png'],
        liveUrl: 'https://dci.dapurcokelat.com/login_form.php'
    },
    {
        id: 'project5',
        title: 'Booking System Dapur Cokelat',
        shortDesc: 'Sistem booking untuk layanan Dapur Cokelat dengan manajemen jadwal dan reservasi.',
        fullDesc: 'Platform booking system untuk manajemen reservasi dengan fitur dashboard dan payment gateway terintegrasi. Sistem ini memungkinkan pelanggan untuk melakukan booking dengan mudah dan efisien.',
        category: 'Web Development',
        categoryColor: 'teal',
        techStack: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'Git'],
        images: ['assets/img/projects/booking-dc-login.png', 'assets/img/projects/booking-dc-list.png'],
        liveUrl: 'https://reseller.beeru.id/'
    },
    {
        id: 'project6',
        title: 'Delivery System Dapur Cokelat',
        shortDesc: 'Sistem delivery untuk mengelola pengantaran produk dengan tracking real-time.',
        fullDesc: 'Detailed description of your project here. Explain what the project does, its main features, challenges faced, and what you learned from building it.',
        category: 'Full Stack',
        categoryColor: 'blue',
        techStack: ['React', 'Node.js', 'MongoDB'],
        images: ['assets/img/projects/delivery-login.png', 'assets/img/projects/delivery-dashboard.png'],
        liveUrl: '#'
    },
    {
        id: 'project7',
        title: 'Project Title 5',
        shortDesc: 'Short description of your project here. This will be displayed in the card preview.',
        fullDesc: 'Detailed description of your mobile app project here. Explain what the app does, its main features, challenges faced, and what you learned from building it.',
        category: 'Mobile App',
        categoryColor: 'green',
        techStack: ['React Native', 'Firebase', 'API'],
        images: ['assets/img/projects/project5-1.png', 'assets/img/projects/project5-2.png'],
        liveUrl: '#'
    },
    {
        id: 'project8',
        title: 'Project Title 6',
        shortDesc: 'Short description of your project here. This will be displayed in the card preview.',
        fullDesc: 'Detailed description of your e-commerce project here. Explain what the project does, its main features, challenges faced, and what you learned from building it.',
        category: 'E-commerce',
        categoryColor: 'orange',
        techStack: ['Laravel', 'Vue.js', 'Stripe'],
        images: ['assets/img/projects/project6-1.png', 'assets/img/projects/project6-2.png', 'assets/img/projects/project6-3.png'],
        liveUrl: '#'
    }
];

function getProjectById(id) {
    return PORTFOLIO_PROJECTS.find(function (p) { return p.id === id; });
}

function getCategoryBadgeClass(color) {
    var map = {
        blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
        teal: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30',
        green: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30',
        red: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30',
        orange: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30',
        yellow: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30',
        pink: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/30',
        indigo: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
        purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30'
    };
    return map[color] || 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/30';
}

function getCategoryDotClass(color) {
    var map = {
        blue: 'bg-blue-600',
        teal: 'bg-teal-600',
        green: 'bg-green-600',
        red: 'bg-red-600',
        orange: 'bg-orange-600',
        yellow: 'bg-yellow-600',
        pink: 'bg-pink-600',
        indigo: 'bg-indigo-600',
        purple: 'bg-purple-600'
    };
    return map[color] || 'bg-gray-600';
}

function getButtonColorClass(color) {
    var map = {
        blue: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800',
        teal: 'bg-teal-600 hover:bg-teal-700 active:bg-teal-800',
        green: 'bg-green-600 hover:bg-green-700 active:bg-green-800',
        red: 'bg-red-600 hover:bg-red-700 active:bg-red-800',
        orange: 'bg-orange-600 hover:bg-orange-700 active:bg-orange-800',
        yellow: 'bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800',
        pink: 'bg-pink-600 hover:bg-pink-700 active:bg-pink-800',
        indigo: 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800',
        purple: 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800'
    };
    return map[color] || 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800';
}
