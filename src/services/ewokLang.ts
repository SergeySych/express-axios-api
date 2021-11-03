import {ICharacter, IPlanet} from '../ts'

class EwokLang {

    consonantsReg = /[b-df-hj-np-tv-z]/ig
    vowelsReg = /[aeiuo]/ig

    objToEwokLang(obj: ICharacter | IPlanet): object {
        for (const key in obj){
            if(Array.isArray(obj[key])){
                obj[key].forEach(el => {
                    obj[key] = el.replace(this.consonantsReg, 'd')
                        .replace(this.vowelsReg, 'i')
                })
            }else{
                obj[key] = obj[key].replace(this.consonantsReg, 'd')
                    .replace(this.vowelsReg, 'i')
            }
        }
        return obj
    }
}

export default new EwokLang()