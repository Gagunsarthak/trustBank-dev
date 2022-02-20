
export namespace Post{
    export interface IPostCreatorDetails{
        creatorName:string,
        creatorId:string
    }
    export interface IPostActivityDetails{
        referals:string,
        pitches:string
        likes:string
    }
    export interface IPostDetails{
        creationDate:string,
        lastModified:string
       
    }
    export interface IThumbnailDetails{
        _type: string,
        asset: {
          _ref:string,
          _type: string
        }
    }
    export interface IHomeTimelineResult{

        title:string
        description:string
        postType:EPostType
        visibility:EVisibility
        coinsOffered:string
        postId:string
        postCreator:IPostCreatorDetails
        postActivity:IPostActivityDetails
        postDetails:IPostDetails
        attachments:string
        thumbnail:string
        duration:string
        tags:string
        skillsRequired:string
        experienceRequired:string

      
    }




    //enums
    export enum EPostType{
        SOCIAL='social',
        CONTRACT='contract'     
    }
    export enum EVisibility{
        PROTECTED='protected',
        PUBLIC='public'
    }
}