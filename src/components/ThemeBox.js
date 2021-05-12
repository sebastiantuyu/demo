import themesList from './ThemesList.js'

export default function ThemeBox() {
    
    return (
        <>
        {
            Object.keys(themesList).map(key => {
                return (
                    <div className="theme flex-column justify-content-around">
                        <div className="boxThemeLogo">
                            <img src={themesList[key].logo} alt="" />
                        </div>
                        
                        <div className="flex-column">
                            <div className="boxThemeTitle font-weight-bold my-2 t-20 pr-4">
                                {themesList[key].name}
                            </div>

                            <span>9 propuestas</span>
                        </div>
                    </div>
                )
            })
        }  
        </>
    )
}
