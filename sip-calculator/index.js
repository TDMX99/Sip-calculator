function sipCalculator(installment, interestRate, years) {
    const monthlyRate = interestRate / 100 / 12;
    const months = years * 12;
    const totalInvested = installment * months;

    let finalValue = installment * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    finalValue = parseInt(finalValue.toFixed(0));
    const wealthGained = finalValue - totalInvested
    return { totalInvested, finalValue, wealthGained }
}

console.log(sipCalculator(2400, 10, 5));