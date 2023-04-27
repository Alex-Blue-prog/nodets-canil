type MenuOptions = "" | "all" | "dog" | "cat" | "fish";

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObjet = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu !== "") {
        returnObjet[activeMenu] = true;
    }

    return returnObjet;
}