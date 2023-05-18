function timeCalc(data) {
    let days = Math.floor(data / 1440)
    let hours = Math.floor(data % 1440 / 60)
    let minutes = '' + Math.floor(data % 60) + 'м'

    let result = ''

    if (days >= 1) {
        result += days + 'д'
    }

    if (hours >= 1) {
        if (result != '') {
            result += ' '
        }
        result += hours + 'ч'
    }

    if (result != '') {
        result += ' '
    }

    result += minutes
    return result
}

function configFilter(filter, numberOfTransfers, isChecked) {
    const nextFilter = filter.slice()
    if (numberOfTransfers === 'l') {
        document.getElementById('box-0').checked = false
        document.getElementById('box-1').checked = false
        document.getElementById('box-2').checked = false
        document.getElementById('box-3').checked = false
        return [0, 1, 2, 3]
    }
    if (isChecked) {
        document.getElementById('box-all').checked = false
        if (nextFilter.length == 4) {
            return ([+numberOfTransfers])
        } else {
            nextFilter.push(+numberOfTransfers)
            return nextFilter
        }
    } else {
        let index = nextFilter.indexOf(+numberOfTransfers)
        nextFilter.splice(index, 1)
        if (nextFilter.length != 0) {
            return nextFilter
        } else {
            return [0, 1, 2, 3]
        }
    }
}

function writeTransfers(numberOfTransfers) {
    if (numberOfTransfers === 0 || numberOfTransfers > 4) {
        return(`Без пересадок`)
    }

    if (numberOfTransfers === 1) {
        return (`${numberOfTransfers} пересадка`)
    }

    if ([2,3,4].includes(numberOfTransfers)) {
        return (`${numberOfTransfers} пересадки`)
    }

    if (numberOfTransfers > 4) {
        return(`${numberOfTransfers} пересадок`)
    }
}

function sortByDuraion(array) {
    if (array.length < 2) {
        return array
    } else {
        const pivot = array[0]

        const less = []
        for (const i of array.slice(1)){
            if (i.duration <= pivot.duration) {
                less.push(i)          
            }
        }

        const greater = []
        for (const i of array.slice(1)) {
            if (i.duration > pivot.duration) {
                greater.push(i)
            }
        }
        return sortByDuraion(less).concat(pivot, sortByDuraion(greater))
    }
}

export {
    timeCalc,
    configFilter,
    writeTransfers,
    sortByDuraion
}