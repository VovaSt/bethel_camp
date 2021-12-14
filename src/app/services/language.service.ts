import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from '../enums/language.enum';

@Injectable()
export class LanguageService {

    private _lang$: BehaviorSubject<Language> = new BehaviorSubject<Language>(null);

    constructor(private translateService: TranslateService) { }

    public setDefaultLang() {
        const browserLang = this.translateService.getBrowserLang();
        const available = Object.values(Language).find(i => browserLang as Language == i);
        const lang = available ? browserLang as Language : Language.ua;

        this.translateService.use(browserLang);
        this._lang$.next(lang);
    }

    public setLanguage(language: Language) {
        this.translateService.use(language);
    }

    public getLanguageObs() {
        return this._lang$.asObservable();
    }

    public getLanguage() {
        return this._lang$.value;
    }
}
