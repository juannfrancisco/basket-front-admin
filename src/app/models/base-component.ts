import { BreadcrumbItem } from './breadcrumb-item';
import { LoadingService } from './../services/loading.service';
export class BaseComponent {

    title:string;
    breadcrumbs: BreadcrumbItem[];
    isLoading: boolean;
    errorMessage: string;
    hasError: boolean;

    constructor(title:string, breadcrumbs: BreadcrumbItem[]) {
        this.title = title;
        this.breadcrumbs = breadcrumbs;
    }

    showLoading(loadingService: LoadingService) {
        this.isLoading = true;
        loadingService.show();
    }

    hideLoading(loadingService: LoadingService) {
        this.isLoading = false;
        loadingService.hide();
    }

    showErrorMessage(){
        this.hasError = true;
        this.errorMessage = "Ocurrio un error al cargar la información, intente más tarde";
    }

    
    showErrorMessageCustom(message:string){
        this.hasError = true;
        this.errorMessage = message;
    }


}
