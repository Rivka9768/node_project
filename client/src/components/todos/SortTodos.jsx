import React from "react";
import Select from "react-select";

const SortTodos = ({ todos, setTodos, allTodos, setAllTodos }) => {
    const categories = [
        { value: 'Serial', label: 'Serial' },
        { value: 'Execution', label: 'Execution' },
        { value: "Alphabetical", label: "Alphabetical" },
        { value: "Random", label: "Random" },];
    const sortByCategory = (category) => {
        const value = (!category) ? "Serial" : category.value
        let tempTodos = [];
        let allTempTodos = [];
        todos.map(t => tempTodos.push(t));
        allTodos.map(t => allTempTodos.push(t));

        switch (value) {

            case "Serial":
                {
                    tempTodos.sort((a, b) => a.id - b.id);
                    allTempTodos.sort((a, b) => a.id - b.id);
                    break;
                }
            case "Execution":
                {
                    tempTodos.sort((a, b) => Number(b.completed) - Number(a.completed));
                    allTempTodos.sort((a, b) => Number(b.completed) - Number(a.completed));
                    break;
                }
            case "Alphabetical":
                {
                    tempTodos.sort((a, b) => (a.title.toUpperCase() === b.title.toUpperCase()) ? 0 : (a.title.toUpperCase() < b.title.toUpperCase()) ? -1 : 1);
                    allTempTodos.sort((a, b) => (a.title.toUpperCase() === b.title.toUpperCase()) ? 0 : (a.title.toUpperCase() < b.title.toUpperCase()) ? -1 : 1);
                    break;
                }
            case "Random": {
                tempTodos = tempTodos.sort(() => Math.random() - 0.5)
                allTempTodos = tempTodos.sort(() => Math.random() - 0.5)
                break;
            }
        }
        setTodos(tempTodos)
        setAllTodos(allTempTodos)
    }
    return (
        <>

            <Select
                menuPlacement="auto"
                menuPosition="fixed"
                isClearable
                placeholder='Sort todos by...'
                onChange={(e) => sortByCategory(e)}
                options={categories}
                getOptionLabel={(categories) => categories["label"]}
                getOptionValue={(categories) => categories["value"]} />

        </>
    )
}
export default SortTodos