import _Vue from "vue";
import Axios from "axios";

// export function AxiosPlugin<AxiosPlugOptions>(Vue: typeof _Vue, options?: AxiosPluginOptions): void {
// 	Vue.prototype.$http = Axios.create({
// 		baseURL: `${process.env.VUE_APP_BASE_API_URL}/`,
// 		responseType: 'json',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	});
// }

export const AxiosPlugin = {
  install(Vue: typeof _Vue, options: AxiosPluginOptions) {
    Vue.prototype.$http = Axios.create({
      baseURL: `${process.env.VUE_APP_BASE_API_URL}/`,
      responseType: "json",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

export class AxiosPluginOptions {
  // add stuff
}
