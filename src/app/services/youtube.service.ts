import { Injectable } from '@angular/core';
import { OauthService } from './oauth.service';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  searchString:string = '';
  constructor(private authService : OauthService) { 
    
  }


  async getVideos(searchKey:string = 'random',maxResults:number = 10){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let videos: never[] = [];
    let params = {
      part : 'snippet',
      mine : false,
      maxResults:maxResults,
      chart:'mostPopular',
      q:searchKey,
    }

    if(this.authService.isAuthenticated)
      params.mine = true;
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/videos',
      'params': params,
      
    });
    
    videos = response.result.items
    return videos
  }


  async getSingleVideo(searchKey:string = 'random',maxResults:number = 10){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let videos: any[] = [];
    let params = {
      part : 'snippet,contentDetails,statistics',
      id:searchKey
    }
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/videos',
      'params': params,
      
    });
    
    videos = response.result.items
    return videos
  }


  async getRelatedVideo(searchKey:string = 'random',maxResults:number = 10){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let videos: any[] = [];
    let params = {
      part : 'snippet',
      maxResults:maxResults,
      type: 'video',
      relatedToVideoId:searchKey
    }
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/search',
      'params': params,
      
    });
    
    videos = response.result.items
    return videos
  }





  async searchVideos(searchKey:string = 'random',maxResults:number = 10){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let videos: never[] = [];
    let params = {
      part : 'snippet',
      mine : false,
      maxResults:maxResults,
      chart:'mostPopular',
      q:searchKey
    }

    if(this.authService.isAuthenticated)
      params.mine = true;
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/search',
      'params': params,
      
    });
    
    videos = response.result.items
    return videos
  }

  getHistory(maxResults:number = 10){  
    return new Promise(async (resolve,reject)=>{
      try{
        if( ! gapi.client ){
          await this.authService.loadClient();
        }
        let videos: never[] = [];
        let params = {
          part : 'contentDetails,snippet',
          mine : false,
          // maxResults:maxResults,
        }
    
        if(this.authService.isAuthenticated)
          params.mine = true;
        
        let response = await gapi.client.request({
          'method': 'GET',
          'path': '/youtube/v3/channels',
          'params': params,
        });
        resolve(response)
      }catch(err){
        reject(err)
      }
    })
  }

  async getComments(videoId:string,maxResults:number = 10){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let comments: any[] = [];
    let params = {
      part : 'snippet,id',
      maxResults:maxResults,
      videoId:videoId
    }
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/commentThreads',
      'params': params,
      
    });
    
    comments = response.result.items
    // comments = items
    return comments
  }
}

var items = [
  {
      "kind": "youtube#commentThread",
      "etag": "SZ2ROGEEtIBhw9f4w8TGbwwtJoc",
      "id": "Ugx0Eytb5oiG9ObIRu14AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "W7GMXm19U51HopYZE-2VhlwzVXA",
              "id": "Ugx0Eytb5oiG9ObIRu14AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "I’ve been wanting to see this movie since the first trailer came out 10 years ago.",
                  "textOriginal": "I’ve been wanting to see this movie since the first trailer came out 10 years ago.",
                  "authorDisplayName": "A",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLTtAKj7-WxJXHE6QJ6GjtLkC2ub98A3dLMAGQ=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCVBacxSZQdYX2IH-qKJS7cA",
                  "authorChannelId": {
                      "value": "UCVBacxSZQdYX2IH-qKJS7cA"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T04:07:05Z",
                  "updatedAt": "2022-03-30T04:07:05Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "s672Q4mDcCIlZZ8TApRSHvm7lQA",
      "id": "Ugzi6GqXle5hSD5AkDJ4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "Em_64wcU8vaKunLrtbyAz7aWnqE",
              "id": "Ugzi6GqXle5hSD5AkDJ4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "I get it, they are slowly releasing the movie, one trailer at a time!",
                  "textOriginal": "I get it, they are slowly releasing the movie, one trailer at a time!",
                  "authorDisplayName": "Alyna J𝟘!N МЕ L!VE🤳 - СНЕℂ𝕂 𝕄𝕐 Рℝ𝟘𝔽𝕀𝕃Е💋",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/x1YkZ93KVsx7LH-Noo9ZsLSQfXFRrntb9myFtqn_wE1jqPsoJhZpzIwz56IjroiCTgP8YLQeWQ=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCCPWqnrG9sMJTgF_UAGvSvw",
                  "authorChannelId": {
                      "value": "UCCPWqnrG9sMJTgF_UAGvSvw"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T04:05:32Z",
                  "updatedAt": "2022-03-30T04:05:32Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "hXcAkwtMgfwIezMDxLCwn9Yu_NU",
      "id": "UgxwraC6qbMRUIG9sbB4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "5FRC5ASAhvsYRtuVM7vrf7IuwNU",
              "id": "UgxwraC6qbMRUIG9sbB4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "waiting for the theatre release",
                  "textOriginal": "waiting for the theatre release",
                  "authorDisplayName": "1111& 23",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLR7Yh_g-lBx8EnCPTHtYV2cE6zMTedh1PJkqLvNkg=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UC6uKlHPVVRJOF63tOdZHf7Q",
                  "authorChannelId": {
                      "value": "UC6uKlHPVVRJOF63tOdZHf7Q"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T04:05:15Z",
                  "updatedAt": "2022-03-30T04:05:15Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "jvQ63Xg6JDS5EnKWqViKbgumyyM",
      "id": "UgyrG-MS6dnXLCqzvnB4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "KiXSxfcNb0149AD1t4NZrKUS0Eo",
              "id": "UgyrG-MS6dnXLCqzvnB4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "OMGGGGGGGG",
                  "textOriginal": "OMGGGGGGGG",
                  "authorDisplayName": "Ruth Nathanielle Dizon",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLTU5dylT698cCElhcOY9e-FdWrAeVu9F3Q6apk_Wg=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCsUWc09fZ03O9zz4VdWbSAA",
                  "authorChannelId": {
                      "value": "UCsUWc09fZ03O9zz4VdWbSAA"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T04:04:11Z",
                  "updatedAt": "2022-03-30T04:04:11Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "TlVFV2s4r-Rl8ivx-tZKHEPsf-U",
      "id": "UgynCuF97kkoHkWBqaJ4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "OFmI2ExK_R_rXquNrpmQLECiCG0",
              "id": "UgynCuF97kkoHkWBqaJ4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "did I just see an F-14 vs a Su-57?",
                  "textOriginal": "did I just see an F-14 vs a Su-57?",
                  "authorDisplayName": "Onin Dela Cruz",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLSId9NjhDOUc9CLDLaZlTaPufy9ywR0WmoCIQ=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCSR2ENS0rQsviOvkNLCACPg",
                  "authorChannelId": {
                      "value": "UCSR2ENS0rQsviOvkNLCACPg"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T04:03:15Z",
                  "updatedAt": "2022-03-30T04:03:15Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "WUxuF_lIJ0YvSFEQ46F0gpDKwQU",
      "id": "Ugyp3-KZW3vZxaKC_nh4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "PoHKFu3i9Vzt6_MDluPNA2FdltI",
              "id": "Ugyp3-KZW3vZxaKC_nh4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "Not interested. Next time don&#39;t bend over for a murderous communist government",
                  "textOriginal": "Not interested. Next time don't bend over for a murderous communist government",
                  "authorDisplayName": "Rl Lr",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLS4d0T5KpjHL5xX64ICh1FNTQVYbHBJEsgHaw=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCppm8932cvC61uzWKKjrYqQ",
                  "authorChannelId": {
                      "value": "UCppm8932cvC61uzWKKjrYqQ"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T04:02:57Z",
                  "updatedAt": "2022-03-30T04:02:57Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "ZOXQ-2obC_02M5xIszDFvQsTrxY",
      "id": "UgyN7PKx-yQmcP-7uTZ4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "R34CygYAOOVvFh9kBgu0euepaEA",
              "id": "UgyN7PKx-yQmcP-7uTZ4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "I see recruiters getting busy after this movie",
                  "textOriginal": "I see recruiters getting busy after this movie",
                  "authorDisplayName": "efrain sanchez",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLQW22kuRs4cvE72Hfp2uEMkgIo35TcI2NnzHw=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCL6z30JdGXu2W7ieA2LX_hw",
                  "authorChannelId": {
                      "value": "UCL6z30JdGXu2W7ieA2LX_hw"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T04:02:18Z",
                  "updatedAt": "2022-03-30T04:02:18Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "ART7X66T6V7YGuDZkNAsAGbvy2c",
      "id": "UgxZbssSvhgjxcug_5l4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "wdkoIhQUot0GTuZWKGqBwvhJp9s",
              "id": "UgxZbssSvhgjxcug_5l4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "About damn time",
                  "textOriginal": "About damn time",
                  "authorDisplayName": "Paul Deckard",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLQR3b8DLr4WJmMbB5-ut55hIkZXBMCis7_FkSGTQg=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCd3ViLy8PK24hzcwWLiTg1A",
                  "authorChannelId": {
                      "value": "UCd3ViLy8PK24hzcwWLiTg1A"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T04:01:28Z",
                  "updatedAt": "2022-03-30T04:01:28Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "XQT9ggkKrdBMKuNNPf2P4d4V6tQ",
      "id": "UgyjHlKsDcALwXsl5xt4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "DwEbzuYmYfu067tchL-XGzXhfrA",
              "id": "UgyjHlKsDcALwXsl5xt4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "Top Gun holds a special place in my heart. I was in the Navy stationed in San Diego when the original came out. I get chills all over again thinking about seeing part two!!",
                  "textOriginal": "Top Gun holds a special place in my heart. I was in the Navy stationed in San Diego when the original came out. I get chills all over again thinking about seeing part two!!",
                  "authorDisplayName": "Alyna J𝟘!N МЕ L!VE🤳 - СНЕℂ𝕂 𝕄𝕐 Рℝ𝟘𝔽𝕀𝕃Е💋",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/x1YkZ93KVsx7LH-Noo9ZsLSQfXFRrntb9myFtqn_wE1jqPsoJhZpzIwz56IjroiCTgP8YLQeWQ=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCCPWqnrG9sMJTgF_UAGvSvw",
                  "authorChannelId": {
                      "value": "UCCPWqnrG9sMJTgF_UAGvSvw"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T04:01:26Z",
                  "updatedAt": "2022-03-30T04:01:26Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "hmX3TfLUY87RaQy8AcVLKeGh82k",
      "id": "Ugz4GJraLVN7IbztrBt4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "znIZyJDA7qDDjDwwf8uyBCMvbT4",
              "id": "Ugz4GJraLVN7IbztrBt4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "That’s definitely an F-14 in-cockpit view with a Russian Su-57 doing some thrust vectoring move in the one scene. Damn I hope they don’t have it shoot the Tomcat down…",
                  "textOriginal": "That’s definitely an F-14 in-cockpit view with a Russian Su-57 doing some thrust vectoring move in the one scene. Damn I hope they don’t have it shoot the Tomcat down…",
                  "authorDisplayName": "30 And Hating It",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLTktwy30SYm0d68psSa1epEugrthBt3KAZwIxp4Dg=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCGREghK6zwDh8EPO4YqK66A",
                  "authorChannelId": {
                      "value": "UCGREghK6zwDh8EPO4YqK66A"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T04:01:13Z",
                  "updatedAt": "2022-03-30T04:01:13Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "-xiJ5Zf0cATshUyHzfBwiA2oWeA",
      "id": "UgzmqtjNX_CV2LdFoNt4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "CvjIi3LylCg-yoUADDf3no0tqXM",
              "id": "UgzmqtjNX_CV2LdFoNt4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "i&#39;m from ukraine and i just wanted to ask y&#39;all a favor\r<br>before i die i just want to have a successful channel it would mean the world to me",
                  "textOriginal": "i'm from ukraine and i just wanted to ask y'all a favor\r\nbefore i die i just want to have a successful channel it would mean the world to me",
                  "authorDisplayName": "Xyperses",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/lUSLB_VAMu3L_mNkZIrttxXZJwcjtezg5xfSh2NF1e4OsILCIsUm2MEf31ubXJQXmRZBt_AhjWQ=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UC5WbAFUJ6rYzJCI1dukZ3IQ",
                  "authorChannelId": {
                      "value": "UC5WbAFUJ6rYzJCI1dukZ3IQ"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T04:00:59Z",
                  "updatedAt": "2022-03-30T04:00:59Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "qAutD8UrP-sjQklxSdARL9iiWak",
      "id": "UgzlcreyJhsfKAOW2ed4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "TYmodz9U4gRumaO_9qaXBy-qokY",
              "id": "UgzlcreyJhsfKAOW2ed4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "My prediction that 3 Super Bowls would pass before the release of this film was correct. Now I&#39;m going to say WW3 will push it back further",
                  "textOriginal": "My prediction that 3 Super Bowls would pass before the release of this film was correct. Now I'm going to say WW3 will push it back further",
                  "authorDisplayName": "leokimvideo",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLQxn9AlBvOmWtFKdBNoqMRaLBbNCQtaIA8V9ltMjA=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCh-sQC1L3J7xicFO1Bo5DeQ",
                  "authorChannelId": {
                      "value": "UCh-sQC1L3J7xicFO1Bo5DeQ"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T04:00:23Z",
                  "updatedAt": "2022-03-30T04:00:23Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "DkQj6c1pcLbtqSv_xyJR4STa3jw",
      "id": "UgyXF226RXHuapcV2Zd4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "enRac-OTDxpZgCdp1iL-UAmPoXs",
              "id": "UgyXF226RXHuapcV2Zd4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "Looks like a STUPID movie .. a bunch of untalented amateur actors who know nothing of aviation and less about acting .. Mission Impossible: Top Gun, starring one of the worst fucking &quot;actors&quot; in history .. I&#39;ll wait and buy the DVD at 4.99 from the Trash Pile .. <a href=\"http://www.youtube.com/results?search_query=%23bradhartliep\">#BradHartliep</a> is FAR GREATER as an actor than Tom Cruiser and FAR BETTER QUALIFIED to play a Fighter Pilot ..",
                  "textOriginal": "Looks like a STUPID movie .. a bunch of untalented amateur actors who know nothing of aviation and less about acting .. Mission Impossible: Top Gun, starring one of the worst fucking \"actors\" in history .. I'll wait and buy the DVD at 4.99 from the Trash Pile .. #BradHartliep is FAR GREATER as an actor than Tom Cruiser and FAR BETTER QUALIFIED to play a Fighter Pilot ..",
                  "authorDisplayName": "Brad Hartliep",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLTvFBq_xpWsB52py1ub7pK58qAQ81kFzEtM4X_xFg=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCXTTNoDGdHnCi7QOGGarbkQ",
                  "authorChannelId": {
                      "value": "UCXTTNoDGdHnCi7QOGGarbkQ"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T03:59:45Z",
                  "updatedAt": "2022-03-30T03:59:45Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "UnjUTG5wwpg0A1JFb850vWS3DoU",
      "id": "Ugwps-bI49_eV6j8ZV14AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "HxbWXSrXYzy3JGeiFFv147ktWBE",
              "id": "Ugwps-bI49_eV6j8ZV14AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "o my god...wowwww...i love tom cruise 💜💜",
                  "textOriginal": "o my god...wowwww...i love tom cruise 💜💜",
                  "authorDisplayName": "Knowhere  ( Superhero  News & Facts )",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/skXotSsG1soPj9eIzbA-qg23doB2q2QcOv43mbgJr0-PBY2SIB5xdgtGN2_5Vr268BvQgSnuVIA=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCp1AfYKpuyIzAdeEMRpFCdw",
                  "authorChannelId": {
                      "value": "UCp1AfYKpuyIzAdeEMRpFCdw"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T03:58:20Z",
                  "updatedAt": "2022-03-30T03:58:20Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "9deXaE3-rjxwWaeP3vdyzzQEI6o",
      "id": "UgzPTQ9VMAbkgTUq9A14AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "lwZehGNc4T4F5M8q9MXSvKcxnn4",
              "id": "UgzPTQ9VMAbkgTUq9A14AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "too long and too woke and too late",
                  "textOriginal": "too long and too woke and too late",
                  "authorDisplayName": "Aromir Sauro",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLQ8cIPQI38ro0EZzdzgscfTX3TGovSYuviMiw5W9g=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCZWBC2bb1NKEzs_OcslSTCA",
                  "authorChannelId": {
                      "value": "UCZWBC2bb1NKEzs_OcslSTCA"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T03:57:52Z",
                  "updatedAt": "2022-03-30T03:57:52Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "Agk4DeeoOoRBSGb-3ju-1SCg4uY",
      "id": "UgwLadF8UgDcUBTnGtJ4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "A1EKSY2S1YkLqMlqyQREbVZ-U7I",
              "id": "UgwLadF8UgDcUBTnGtJ4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "Those of us who love aviation and action and especially combined have waited a long time for this. I for example have waited 34 years. I am so happy that my son is just as eager for the release as I am. We will love it together.",
                  "textOriginal": "Those of us who love aviation and action and especially combined have waited a long time for this. I for example have waited 34 years. I am so happy that my son is just as eager for the release as I am. We will love it together.",
                  "authorDisplayName": "Alyna J𝟘!N МЕ L!VE🤳 - СНЕℂ𝕂 𝕄𝕐 Рℝ𝟘𝔽𝕀𝕃Е💋",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/x1YkZ93KVsx7LH-Noo9ZsLSQfXFRrntb9myFtqn_wE1jqPsoJhZpzIwz56IjroiCTgP8YLQeWQ=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCCPWqnrG9sMJTgF_UAGvSvw",
                  "authorChannelId": {
                      "value": "UCCPWqnrG9sMJTgF_UAGvSvw"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T03:57:19Z",
                  "updatedAt": "2022-03-30T03:57:19Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "ZBewR3u17gtma7IgWi2OEF-EIPY",
      "id": "UgzoFJxxo4v0zniWJzd4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "bSy92sG66BayhIBgZk89fkH6xd4",
              "id": "UgzoFJxxo4v0zniWJzd4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "You always know just what to say.",
                  "textOriginal": "You always know just what to say.",
                  "authorDisplayName": "Alyna J𝟘!N МЕ L!VE🤳 - СНЕℂ𝕂 𝕄𝕐 Рℝ𝟘𝔽𝕀𝕃Е💋",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/x1YkZ93KVsx7LH-Noo9ZsLSQfXFRrntb9myFtqn_wE1jqPsoJhZpzIwz56IjroiCTgP8YLQeWQ=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCCPWqnrG9sMJTgF_UAGvSvw",
                  "authorChannelId": {
                      "value": "UCCPWqnrG9sMJTgF_UAGvSvw"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T03:53:12Z",
                  "updatedAt": "2022-03-30T03:53:12Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "_FCdy_YE42Vr0oea2sFM1w-JZWY",
      "id": "UgzQNuX3qGNL6PBbZwp4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "HA1AxIyf_PX8o-QWQkzekT-6y9Y",
              "id": "UgzQNuX3qGNL6PBbZwp4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "didn&#39;t TG2 come out last year or something? (heavy cynicism)<br><a href=\"https://www.youtube.com/watch?v=giXco2jaZ_4&amp;t=2m07s\">2:07</a>  SU-57 No one&#39;s been this close before.",
                  "textOriginal": "didn't TG2 come out last year or something? (heavy cynicism)\n2:07  SU-57 No one's been this close before.",
                  "authorDisplayName": "Omar Tanguma",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLQ1q8ym7d_38MS-xfrqAcbO3eDk54IcBK0MtmSD=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCmsGv3SwwO_SXAXAJb8uWpQ",
                  "authorChannelId": {
                      "value": "UCmsGv3SwwO_SXAXAJb8uWpQ"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T03:52:51Z",
                  "updatedAt": "2022-03-30T04:06:52Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  },
  {
      "kind": "youtube#commentThread",
      "etag": "VFr_JVhv_V96HcWc9Kq0FQGxejU",
      "id": "UgzcWThUQl3WkiHDhdF4AaABAg",
      "snippet": {
          "videoId": "giXco2jaZ_4",
          "topLevelComment": {
              "kind": "youtube#comment",
              "etag": "ZiuskVbXVZecnQpDgC3E2-UFNzw",
              "id": "UgzcWThUQl3WkiHDhdF4AaABAg",
              "snippet": {
                  "videoId": "giXco2jaZ_4",
                  "textDisplay": "Ever time I see Tom cruise I always think to myself, why did he join Scientology. And then I realize the base headquarters is in hemet, ca. I scar my self every time. 🥶",
                  "textOriginal": "Ever time I see Tom cruise I always think to myself, why did he join Scientology. And then I realize the base headquarters is in hemet, ca. I scar my self every time. 🥶",
                  "authorDisplayName": "Jon Carlos",
                  "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AKedOLRkc0262UVPOZFCJoJhi90633Wp3VRVA3I4RpSdVw=s48-c-k-c0x00ffffff-no-rj",
                  "authorChannelUrl": "http://www.youtube.com/channel/UCBmSf0FEJ7N_PVGBMUVNepg",
                  "authorChannelId": {
                      "value": "UCBmSf0FEJ7N_PVGBMUVNepg"
                  },
                  "canRate": true,
                  "viewerRating": "none",
                  "likeCount": 0,
                  "publishedAt": "2022-03-30T03:52:14Z",
                  "updatedAt": "2022-03-30T03:52:14Z"
              }
          },
          "canReply": true,
          "totalReplyCount": 0,
          "isPublic": true
      }
  }
]