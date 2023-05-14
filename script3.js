const departmentList = [
    {
        departmentName: 'Financial',
        employees:
            [
                {
                    name: 'Rose',
                    age: 26,
                    responsibility: 'Financial director',
                    salary: 5600
                },
                {
                    name: 'Stevem',
                    age: 32,
                    responsibility: 'Financial manager',
                    salary: 4200
                },
                {
                    name: 'Beca',
                    age: 26,
                    responsibility: 'Financial analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departmentName: 'Expedition',
        employees:
            [
                {
                    name: 'Rooper',
                    age: 35,
                    responsibility: 'Expedition director',
                    salary: 5600
                },
                {
                    name: 'Maggie',
                    age: 22,
                    responsibility: 'Expedition manager',
                    salary: 4200
                },
                {
                    name: 'Thompson',
                    age: 41,
                    responsibility: 'Expedition analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departmentName: 'Capitation',
        employees:
            [
                {
                    name: 'Saory',
                    age: 35,
                    responsibility: 'Capitation director',
                    salary: 5600
                },
                {
                    name: 'Silvia',
                    age: 22,
                    responsibility: 'Capitation manager',
                    salary: 4200
                },
                {
                    name: 'Sonem',
                    age: 41,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Havi',
                    age: 41,
                    responsibility: 'Trainee Capitation manager',
                    salary: 1500
                },
                {
                    name: 'Margie',
                    age: 25,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Victoria',
                    age: 18,
                    responsibility: 'Trainee Capitation analyst',
                    salary: 1500
                }
            ],
        working: true
    },
]

function howManyDepartments(departmentList) {
    return departmentList.length
}

console.log(howManyDepartments(departmentList))

function changeDepartmentName(departmentList, oldName, newName) {
    let AtualizedName = []
    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].departmentName == oldName) {
            departmentList[i].departmentName = newName
            AtualizedName.push(departmentList[i])
        }
    }
    if (AtualizedName.length === 0) {
        return "Departamento não encontrado"
    } else {
        return departmentList
    }
}

console.log(changeDepartmentName(departmentList, 'Capitation', 'pORRA'))

function changeDepartmentName2 (departmentList, oldName, newName) {
    let departmentLists = null
    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].departmentName == oldName) {
            departmentList[i].departmentName = newName
            departmentLists = departmentList[i]
        }
    }
    if (!departmentLists) {
        return "Departamento não encontrado"
    } else {
        return departmentLists
    }
}

