// Generated by ContextProfileGenerator

// Is the central profile class that connects the different user-defined context-entities

import { UserProfile } from './user.profile';
import { EnvironmentProfile } from './environment.profile';
import { PlatformProfile } from './platform.profile';
import { AppProfile } from './app.profile';

export class Profile {
	public user: UserProfile;
	public environment: EnvironmentProfile;
	public platform: PlatformProfile;
	public app: AppProfile;

    constructor()
    {
       	// initialize context profiles			    	
		this.user = new UserProfile();
		this.environment = new EnvironmentProfile();
		this.platform = new PlatformProfile();
		this.app = new AppProfile();
    }
    
	// get User profile
	public getUser() : UserProfile{
		return this.user;
	}
	// get Environment profile
	public getEnvironment() : EnvironmentProfile{
		return this.environment;
	}
	// get Platform profile
	public getPlatform() : PlatformProfile{
		return this.platform;
	}
	// get App profile
	public getApp() : AppProfile{
		return this.app;
	}
}
