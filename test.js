function fib(num) {
    let first = 0, second = 1, temp

    for(let i = 1; i < num; i++) {
        temp = second
        second = first + second
        first = temp
    }
    console.log(second)
    return second
}

fib(5)