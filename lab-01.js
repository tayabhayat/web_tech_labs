function addition(a,b){
    return a + b;
}
console.log("Task 1:", addition(5, 10));
// Task 02
function AND(a, b){
    return a & b;
}
function or(a, b){
    return a | b;
}
function xor(a,b){
    return a ^ b;
} 
console.log("Task 2:");
console.log("AND:", AND(5, 3)); // 1
console.log("OR:", or(5, 3));   // 7
console.log("XOR:", xor(5, 3)); // 6

// Task 03
function addUp(a) {
    let sum = 0;

    for (let i = 1; i <= a; i++) {
        sum += i;
    }

    return sum;
}

console.log("Task 3:", addUp(4));

// Task 04

function progressBar(a) {
    // Calculate complete 10% slots
    let filledSlots = Math.floor(a / 10);

    // Remaining empty slots
    let emptySlots = 10 - filledSlots;

    return "#".repeat(filledSlots) + "-".repeat(emptySlots);
}
console.log("Task 4:");
console.log(progressBar(10)); // #---------
console.log(progressBar(40)); // ####------
console.log(progressBar(49)); // ####------


// Task 05
function minMax(arr) {
    let minimum = Math.min(...arr);
    let maximum = Math.max(...arr);

    return [minimum, maximum];
}

console.log("Task 5:", minMax([1, 2, 3, 4, 5, 6]));


// Task 06

function calculateRepoStats(repos) {

    // Extract all star counts using map()
    const stars = repos.map(repo => repo.stars);

    // Find maximum and minimum stars
    const maxStars = Math.max(...stars);
    const minStars = Math.min(...stars);

    // Calculate average stars
    const avgStars = Math.floor(
        stars.reduce((sum, value) => sum + value, 0) / stars.length
    );
    const varianceScore = Math.abs(maxStars - minStars);

    return {
        maxStars,
        minStars,
        avgStars,
        varianceScore
    };
}

const repos = [
    { name: 'repo-a', stars: 12 },
    { name: 'repo-b', stars: 45 },
    { name: 'repo-c', stars: 3 }
];
console.log("Task 6:", calculateRepoStats(repos));

// Task 07

function calculateFinalPrice(basePrice, taxRate, discountPercentage) {

    // Helper function to round to 2 decimal places
    function round2(value) {
        return Math.round((value + Number.EPSILON) * 100) / 100;
    }

    // Apply discount
    const discountedPrice = round2(
        basePrice * (1 - discountPercentage / 100)
    );

    // Calculate tax
    const taxAmount = round2(discountedPrice * (taxRate / 100));

    // Add tax to discounted price
    const finalPrice = round2(discountedPrice + taxAmount);

    // Calculate loyalty points (round up)
    const loyaltyPoints = Math.ceil(finalPrice);

    return {
        discountedPrice,
        taxAmount,
        finalPrice,
        loyaltyPoints
    };
}

console.log("Task 7:",
    calculateFinalPrice(100, 10, 20)
);


// Task 08
function paginateData(items, pageNumber, pageSize = 5) {

    // Calculate total number of pages
    const totalPages = Math.ceil(items.length / pageSize);

    // Keep the requested page within valid bounds
    const currentPage = totalPages === 0
        ? 1
        : Math.min(Math.max(1, Math.floor(pageNumber)), totalPages);

    // Calculate starting index
    const startIndex = (currentPage - 1) * pageSize;

    // Calculate ending index
    const endIndex = startIndex + pageSize;

    // Extract required items
    const data = items.slice(startIndex, endIndex);

    // Check next and previous pages
    const hasNext = currentPage < totalPages;
    const hasPrev = currentPage > 1 && totalPages > 0;

    return {
        data,
        currentPage,
        totalPages,
        hasNext,
        hasPrev
    };
}

const allProducts = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor',
    'Desk',
    'Chair',
    'Webcam',
    'Headphones'
];

const result = paginateData(allProducts, 2, 3);
console.log("Task 8:", result);